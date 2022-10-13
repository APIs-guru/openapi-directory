from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simple_user


@dataclass_json
@dataclass
class TeamProjectPermissions:
    admin: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    read: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    write: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

@dataclass_json
@dataclass
class TeamProject:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    columns_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns_url' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    creator: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    organization_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_permission' }})
    owner_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_url' }})
    permissions: TeamProjectPermissions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
