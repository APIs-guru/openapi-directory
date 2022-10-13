from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoteSink:
    bond_date: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bond_date' }})
    device_class: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_class' }})
    device_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    last_connect_date: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_connect_date' }})
    mac_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mac_address' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rssi: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rssi' }})
    service_uuids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_uuids' }})
    
