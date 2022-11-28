from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum(str, Enum):
    AUDIENCE_FILTER_SCOPE_UNSPECIFIED = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
    AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceSimpleFilter:
    r"""GoogleAnalyticsAdminV1alphaAudienceSimpleFilter
    Defines a simple filter that a user must satisfy to be a member of the Audience.
    """
    
    filter_expression: Optional[GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterExpression') }})
    scope: Optional[GoogleAnalyticsAdminV1alphaAudienceSimpleFilterScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
