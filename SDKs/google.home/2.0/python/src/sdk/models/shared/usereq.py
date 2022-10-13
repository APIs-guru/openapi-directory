from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import highshelf
from . import lowshelf


@dataclass_json
@dataclass
class UserEq:
    high_shelf: highshelf.HighShelf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'high_shelf' }})
    low_shelf: lowshelf.LowShelf = field(default=None, metadata={'dataclasses_json': { 'field_name': 'low_shelf' }})
    max_peaking_eqs: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_peaking_eqs' }})
    peaking_eqs: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peaking_eqs' }})
    
