from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForRepoRequest:
    path_params: TeamsCheckPermissionsForRepoPathParams = field(default=None)
    

@dataclass
class TeamsCheckPermissionsForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    full_repository: Optional[shared.FullRepository] = field(default=None)
    minimal_repository: Optional[shared.MinimalRepository] = field(default=None)
    
