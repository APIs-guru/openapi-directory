from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import condition


@dataclass_json
@dataclass
class Filter:
    condition: condition.Condition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
