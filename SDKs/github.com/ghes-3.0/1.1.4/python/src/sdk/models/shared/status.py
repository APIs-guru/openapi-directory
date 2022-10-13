from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import simple_user


@dataclass_json
@dataclass
class Status:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    context: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    creator: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_url' }})
    updated_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
