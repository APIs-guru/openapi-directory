from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum(str, Enum):
    LOG_CONDITION_UNSPECIFIED = "LOG_CONDITION_UNSPECIFIED"
    AUDIENCE_JOINED = "AUDIENCE_JOINED"
    AUDIENCE_MEMBERSHIP_RENEWED = "AUDIENCE_MEMBERSHIP_RENEWED"


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAudienceEventTrigger:
    r"""GoogleAnalyticsAdminV1alphaAudienceEventTrigger
    Specifies an event to log when a user joins the Audience.
    """
    
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    log_condition: Optional[GoogleAnalyticsAdminV1alphaAudienceEventTriggerLogConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logCondition') }})
    
