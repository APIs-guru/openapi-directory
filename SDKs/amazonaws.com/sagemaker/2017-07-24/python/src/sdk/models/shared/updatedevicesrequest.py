from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import device


@dataclass_json
@dataclass
class UpdateDevicesRequest:
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    devices: List[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Devices' }})
    
