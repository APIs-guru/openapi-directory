from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum(str, Enum):
    AUDIENCE_FILTER_SCOPE_UNSPECIFIED = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
    AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceSequenceFilter:
    r"""GoogleAnalyticsAdminV1alphaAudienceSequenceFilter
    Defines filters that must occur in a specific order for the user to be a member of the Audience.
    """
    
    scope: Optional[GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    sequence_maximum_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceMaximumDuration') }})
    sequence_steps: Optional[List[GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceSteps') }})
    
