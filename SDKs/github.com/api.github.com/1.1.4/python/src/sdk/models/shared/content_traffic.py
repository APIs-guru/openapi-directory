from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContentTraffic:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    uniques: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniques' }})
    
