from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeregisterDevicesRequest:
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    device_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceNames' }})
    
