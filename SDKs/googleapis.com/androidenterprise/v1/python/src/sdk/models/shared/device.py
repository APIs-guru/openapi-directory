from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DeviceManagementTypeEnum(str, Enum):
    MANAGED_DEVICE = "managedDevice"
    MANAGED_PROFILE = "managedProfile"
    CONTAINER_APP = "containerApp"
    UNMANAGED_PROFILE = "unmanagedProfile"


@dataclass_json
@dataclass
class Device:
    r"""Device
    A Devices resource represents a mobile device managed by the EMM and belonging to a specific enterprise user.
    """
    
    android_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidId') }})
    management_type: Optional[DeviceManagementTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementType') }})
    policy: Optional[Policy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    report: Optional[DeviceReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('report') }})
    
