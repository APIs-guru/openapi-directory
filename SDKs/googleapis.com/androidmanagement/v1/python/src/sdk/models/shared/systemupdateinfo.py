from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SystemUpdateInfoUpdateStatusEnum(str, Enum):
    UPDATE_STATUS_UNKNOWN = "UPDATE_STATUS_UNKNOWN"
    UP_TO_DATE = "UP_TO_DATE"
    UNKNOWN_UPDATE_AVAILABLE = "UNKNOWN_UPDATE_AVAILABLE"
    SECURITY_UPDATE_AVAILABLE = "SECURITY_UPDATE_AVAILABLE"
    OS_UPDATE_AVAILABLE = "OS_UPDATE_AVAILABLE"


@dataclass_json
@dataclass
class SystemUpdateInfo:
    update_received_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateReceivedTime' }})
    update_status: Optional[SystemUpdateInfoUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateStatus' }})
    
