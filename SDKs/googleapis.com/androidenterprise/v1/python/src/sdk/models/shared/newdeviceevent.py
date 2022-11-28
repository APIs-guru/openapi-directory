from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NewDeviceEventManagementTypeEnum(str, Enum):
    MANAGED_DEVICE = "managedDevice"
    MANAGED_PROFILE = "managedProfile"


@dataclass_json
@dataclass
class NewDeviceEvent:
    r"""NewDeviceEvent
    An event generated when a new device is ready to be managed.
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    dpc_package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dpcPackageName') }})
    management_type: Optional[NewDeviceEventManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementType') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
