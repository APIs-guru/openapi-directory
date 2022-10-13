from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Range:
    limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    offset: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
