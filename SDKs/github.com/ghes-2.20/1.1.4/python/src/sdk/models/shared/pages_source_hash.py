from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PagesSourceHash:
    branch: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
