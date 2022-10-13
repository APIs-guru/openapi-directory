from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TeamsAddOrUpdateRepoPermissionsLegacyPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateRepoPermissionsLegacyRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsLegacyRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsLegacyPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateRepoPermissionsLegacyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
