from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceStats:
    connected_device_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConnectedDeviceCount' }})
    registered_device_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegisteredDeviceCount' }})
    
