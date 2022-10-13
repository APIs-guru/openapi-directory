from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageBuildStatus:
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
