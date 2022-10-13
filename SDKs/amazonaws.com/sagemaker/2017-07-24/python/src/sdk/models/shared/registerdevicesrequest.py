from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import device
from . import tag


@dataclass_json
@dataclass
class RegisterDevicesRequest:
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    devices: List[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Devices' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
