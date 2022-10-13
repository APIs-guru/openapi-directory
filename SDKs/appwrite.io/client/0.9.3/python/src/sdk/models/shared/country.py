from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Country:
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
