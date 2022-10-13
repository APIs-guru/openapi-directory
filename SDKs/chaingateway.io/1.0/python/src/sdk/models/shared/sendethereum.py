from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendEthereum:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    txid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txid' }})
    
