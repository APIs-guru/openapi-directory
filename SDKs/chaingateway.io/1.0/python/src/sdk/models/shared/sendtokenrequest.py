from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendTokenRequest:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    contractaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contractaddress' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
