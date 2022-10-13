from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetGasPrice:
    gasprice: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gasprice' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    
