from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendEthereumRequest:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
