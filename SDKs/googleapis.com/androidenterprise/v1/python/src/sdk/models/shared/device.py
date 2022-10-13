from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policy
from . import devicereport

class DeviceManagementTypeEnum(str, Enum):
    MANAGED_DEVICE = "managedDevice"
    MANAGED_PROFILE = "managedProfile"
    CONTAINER_APP = "containerApp"
    UNMANAGED_PROFILE = "unmanagedProfile"


@dataclass_json
@dataclass
class Device:
    android_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidId' }})
    management_type: Optional[DeviceManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementType' }})
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    report: Optional[devicereport.DeviceReport] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'report' }})
    
