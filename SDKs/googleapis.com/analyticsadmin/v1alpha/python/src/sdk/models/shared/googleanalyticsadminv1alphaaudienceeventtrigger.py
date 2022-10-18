from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum(str, Enum):
    LOG_CONDITION_UNSPECIFIED = "LOG_CONDITION_UNSPECIFIED"
    AUDIENCE_JOINED = "AUDIENCE_JOINED"
    AUDIENCE_MEMBERSHIP_RENEWED = "AUDIENCE_MEMBERSHIP_RENEWED"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceEventTrigger:
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    log_condition: Optional[GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logCondition' }})
    
