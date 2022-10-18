from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudienceeventtrigger
from . import googleanalyticsadminv1alphaaudiencefilterclause

class GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum(str, Enum):
    AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED"
    EXCLUDE_TEMPORARILY = "EXCLUDE_TEMPORARILY"
    EXCLUDE_PERMANENTLY = "EXCLUDE_PERMANENTLY"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudience:
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsPersonalizationEnabled' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    event_trigger: Optional[googleanalyticsadminv1alphaaudienceeventtrigger.GoogleAnalyticsAdminV1alphaAudienceEventTrigger] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTrigger' }})
    exclusion_duration_mode: Optional[GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionDurationMode' }})
    filter_clauses: Optional[List[googleanalyticsadminv1alphaaudiencefilterclause.GoogleAnalyticsAdminV1alphaAudienceFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filterClauses' }})
    membership_duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipDurationDays' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
