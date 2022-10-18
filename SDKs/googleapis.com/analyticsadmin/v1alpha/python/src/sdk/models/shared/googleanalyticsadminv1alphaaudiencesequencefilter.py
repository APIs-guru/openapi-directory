from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudiencesequencefilteraudiencesequencestep

class GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum(str, Enum):
    AUDIENCE_FILTER_SCOPE_UNSPECIFIED = "AUDIENCE_FILTER_SCOPE_UNSPECIFIED"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_EVENT"
    AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION = "AUDIENCE_FILTER_SCOPE_WITHIN_SAME_SESSION"
    AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS = "AUDIENCE_FILTER_SCOPE_ACROSS_ALL_SESSIONS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceSequenceFilter:
    scope: Optional[GoogleAnalyticsAdminV1alphaAudienceSequenceFilterScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    sequence_maximum_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceMaximumDuration' }})
    sequence_steps: Optional[List[googleanalyticsadminv1alphaaudiencesequencefilteraudiencesequencestep.GoogleAnalyticsAdminV1alphaAudienceSequenceFilterAudienceSequenceStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sequenceSteps' }})
    
