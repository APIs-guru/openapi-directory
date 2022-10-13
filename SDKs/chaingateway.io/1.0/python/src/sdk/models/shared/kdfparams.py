from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Kdfparams:
    dklen: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dklen' }})
    n: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'n' }})
    p: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'p' }})
    r: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'r' }})
    salt: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salt' }})
    
