from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Example112:
    device_class: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_class' }})
    device_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    expected_profiles: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expected_profiles' }})
    mac_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rssi: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rssi' }})
    
