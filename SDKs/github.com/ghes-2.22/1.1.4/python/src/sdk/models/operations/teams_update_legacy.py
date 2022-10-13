from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsUpdateLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsUpdateLegacyRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"

class TeamsUpdateLegacyRequestBodyPrivacyEnum(str, Enum):
    SECRET = "secret"
    CLOSED = "closed"


@dataclass_json
@dataclass
class TeamsUpdateLegacyRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_team_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_team_id' }})
    permission: Optional[TeamsUpdateLegacyRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[TeamsUpdateLegacyRequestBodyPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    

@dataclass
class TeamsUpdateLegacyRequest:
    path_params: TeamsUpdateLegacyPathParams = field(default=None)
    request: Optional[TeamsUpdateLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsUpdateLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    team_full: Optional[shared.TeamFull] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
