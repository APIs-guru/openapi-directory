from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simple_user


@dataclass_json
@dataclass
class OrganizationInvitation:
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    failed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed_at' }})
    failed_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed_reason' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invitation_team_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitation_team_url' }})
    invitation_teams_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invitation_teams_url' }})
    inviter: simple_user.SimpleUser = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inviter' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    team_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_count' }})
    
