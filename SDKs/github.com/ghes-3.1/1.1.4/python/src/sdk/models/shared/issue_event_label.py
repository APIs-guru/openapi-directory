from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssueEventLabel:
    color: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
