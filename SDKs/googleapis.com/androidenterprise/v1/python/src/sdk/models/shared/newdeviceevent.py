from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NewDeviceEventManagementTypeEnum(str, Enum):
    MANAGED_DEVICE = "managedDevice"
    MANAGED_PROFILE = "managedProfile"


@dataclass_json
@dataclass
class NewDeviceEvent:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    dpc_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dpcPackageName' }})
    management_type: Optional[NewDeviceEventManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementType' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
