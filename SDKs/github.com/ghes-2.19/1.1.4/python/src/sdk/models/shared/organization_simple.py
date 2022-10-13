from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrganizationSimple:
    avatar_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_url' }})
    hooks_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooks_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    issues_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issues_url' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    public_members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_members_url' }})
    repos_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_url' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
