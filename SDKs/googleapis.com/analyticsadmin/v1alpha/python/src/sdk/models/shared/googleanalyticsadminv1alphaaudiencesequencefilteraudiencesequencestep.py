from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum(str, Enum):
    AUDIENCE_FILTER_SCOPE_UNSPECIFIED = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
    AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep:
    r"""GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep
    A condition that must occur in the specified step order for this user to match the sequence.
    """
    
    constraint_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraintDuration') }})
    filter_expression: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterExpression') }})
    immediately_follows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('immediatelyFollows') }})
    scope: Optional[GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
