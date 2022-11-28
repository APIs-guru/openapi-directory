from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UsageLogEnabledLogTypesEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    SECURITY_LOGS = "SECURITY_LOGS"
    NETWORK_ACTIVITY_LOGS = "NETWORK_ACTIVITY_LOGS"

class UsageLogUploadOnCellularAllowedEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = "LOG_TYPE_UNSPECIFIED"
    SECURITY_LOGS = "SECURITY_LOGS"
    NETWORK_ACTIVITY_LOGS = "NETWORK_ACTIVITY_LOGS"


@dataclass_json
@dataclass
class UsageLog:
    r"""UsageLog
    Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).
    """
    
    enabled_log_types: Optional[List[UsageLogEnabledLogTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledLogTypes') }})
    upload_on_cellular_allowed: Optional[List[UsageLogUploadOnCellularAllowedEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadOnCellularAllowed') }})
    
