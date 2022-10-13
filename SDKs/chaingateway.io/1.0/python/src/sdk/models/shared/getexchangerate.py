from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetExchangeRate:
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    rate: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    
