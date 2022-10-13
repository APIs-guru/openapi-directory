from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LogOperation:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_deprecated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeprecated' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
