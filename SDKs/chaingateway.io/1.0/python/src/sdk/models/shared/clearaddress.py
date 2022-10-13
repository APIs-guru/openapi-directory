from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ClearAddress:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    ethereumaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ethereumaddress' }})
    gas: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gas' }})
    newaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newaddress' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    total: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    txid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    
