from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsUpdatePathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsUpdateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_team_id' }})
    permission: Optional[TeamsUpdateRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[TeamsUpdateRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass
class TeamsUpdateRequest:
    path_params: TeamsUpdatePathParams = field(default=None)
    request: Optional[TeamsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_full: Optional[shared.TeamFull] = field(default=None)
    
