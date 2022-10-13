from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActivityType:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
