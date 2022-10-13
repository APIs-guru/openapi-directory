from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    enabled_log_types: Optional[List[UsageLogEnabledLogTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledLogTypes' }})
    upload_on_cellular_allowed: Optional[List[UsageLogUploadOnCellularAllowedEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadOnCellularAllowed' }})
    
