from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class KeySimple:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
