from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Net:
    ethernet_connected: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethernet_connected' }})
    ip_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    online: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'online' }})
    
