from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LdapMappingTeam:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_dn' }})
    members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    parent: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
