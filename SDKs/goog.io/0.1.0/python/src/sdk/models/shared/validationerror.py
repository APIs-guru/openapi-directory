from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValidationError:
    loc: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loc' }})
    msg: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'msg' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
