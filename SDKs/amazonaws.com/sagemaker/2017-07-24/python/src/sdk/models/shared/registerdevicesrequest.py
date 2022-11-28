from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterDevicesRequest:
    device_fleet_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceFleetName') }})
    devices: List[Device] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Devices') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
