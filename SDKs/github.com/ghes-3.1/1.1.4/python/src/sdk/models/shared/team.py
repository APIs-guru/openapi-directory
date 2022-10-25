from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamTeamSimple:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_dn' }})
    members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    permission: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Team:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parent: Optional[TeamTeamSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permission: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
