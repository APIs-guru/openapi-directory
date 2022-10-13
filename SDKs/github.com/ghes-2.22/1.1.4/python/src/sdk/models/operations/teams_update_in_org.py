from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsUpdateInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateInOrgRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateInOrgRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsUpdateInOrgRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_team_id' }})
    permission: Optional[TeamsUpdateInOrgRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[TeamsUpdateInOrgRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass
class TeamsUpdateInOrgRequest:
    path_params: TeamsUpdateInOrgPathParams = field(default=None)
    request: Optional[TeamsUpdateInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_full: Optional[shared.TeamFull] = field(default=None)
    
