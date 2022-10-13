from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Person:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
