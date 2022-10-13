from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum(str, Enum):
    RETENTION_DURATION_UNSPECIFIED = "RETENTION_DURATION_UNSPECIFIED"
    TWO_MONTHS = "TWO_MONTHS"
    FOURTEEN_MONTHS = "FOURTEEN_MONTHS"
    TWENTY_SIX_MONTHS = "TWENTY_SIX_MONTHS"
    THIRTY_EIGHT_MONTHS = "THIRTY_EIGHT_MONTHS"
    FIFTY_MONTHS = "FIFTY_MONTHS"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDataRetentionSettings:
    event_data_retention: Optional[GoogleAnalyticsAdminV1alphaDataRetentionSettingsEventDataRetentionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDataRetention' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reset_user_data_on_new_activity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resetUserDataOnNewActivity' }})
    
