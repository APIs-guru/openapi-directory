from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencefilterexpression

class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum(str, Enum):
    AUDIENCE_FILTER_SCOPE_UNSPECIFIED = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
    AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep:
    constraint_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'constraintDuration' }})
    filter_expression: Optional[googleanalyticsadminv1alphaaudiencefilterexpression.GoogleAnalyticsAdminV1alphaAudienceFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterExpression' }})
    immediately_follows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'immediatelyFollows' }})
    scope: Optional[GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStepScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
