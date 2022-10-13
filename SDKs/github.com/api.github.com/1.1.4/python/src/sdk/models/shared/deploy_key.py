from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeployKey:
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    read_only: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_only' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    
