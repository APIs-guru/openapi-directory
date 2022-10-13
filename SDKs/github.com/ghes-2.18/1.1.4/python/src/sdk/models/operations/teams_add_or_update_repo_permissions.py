from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class TeamsAddOrUpdateRepoPermissionsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"


@dataclass_json
@dataclass
class TeamsAddOrUpdateRepoPermissionsRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateRepoPermissionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
