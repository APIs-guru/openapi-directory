from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    
class TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum(str, Enum):
    PULL = "pull"
    PUSH = "push"
    ADMIN = "admin"
    MAINTAIN = "maintain"
    TRIAGE = "triage"


@dataclass_json
@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgRequestBody:
    permission: Optional[TeamsAddOrUpdateRepoPermissionsInOrgRequestBodyPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgRequest:
    path_params: TeamsAddOrUpdateRepoPermissionsInOrgPathParams = field(default=None)
    request: Optional[TeamsAddOrUpdateRepoPermissionsInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class TeamsAddOrUpdateRepoPermissionsInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
