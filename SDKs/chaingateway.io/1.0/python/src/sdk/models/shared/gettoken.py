from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetToken:
    contractaddress: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contractaddress' }})
    decimals: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decimals' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ok: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    supply: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supply' }})
    symbol: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'symbol' }})
    
