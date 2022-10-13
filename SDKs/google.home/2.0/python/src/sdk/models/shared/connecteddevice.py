from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import device


@dataclass_json
@dataclass
class ConnectedDevice:
    device: device.Device = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    enabled_profiles: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled_profiles' }})
    
