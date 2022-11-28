from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum(str, Enum):
    AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED = "AUDIENCE_EXCLUSION_DURATION_MODE_UNSPECIFIED"
    EXCLUDE_TEMPORARILY = "EXCLUDE_TEMPORARILY"
    EXCLUDE_PERMANENTLY = "EXCLUDE_PERMANENTLY"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceInput:
    r"""GoogleAnalyticsAdminV1alphaAudienceInput
    A resource message representing a GA4 Audience.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    event_trigger: Optional[GoogleAnalyticsAdminV1alphaAudienceEventTrigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    exclusion_duration_mode: Optional[GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionDurationMode') }})
    filter_clauses: Optional[List[GoogleAnalyticsAdminV1alphaAudienceFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterClauses') }})
    membership_duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudience:
    r"""GoogleAnalyticsAdminV1alphaAudience
    A resource message representing a GA4 Audience.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    event_trigger: Optional[GoogleAnalyticsAdminV1alphaAudienceEventTrigger] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTrigger') }})
    exclusion_duration_mode: Optional[GoogleAnalyticsAdminV1alphaAudienceExclusionDurationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionDurationMode') }})
    filter_clauses: Optional[List[GoogleAnalyticsAdminV1alphaAudienceFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterClauses') }})
    membership_duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membershipDurationDays') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
