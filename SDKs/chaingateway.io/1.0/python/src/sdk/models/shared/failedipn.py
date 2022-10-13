from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FailedIpn:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    contractaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contractaddress' }})
    ethereumaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethereumaddress' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
