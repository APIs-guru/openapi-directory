from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForRepoRequest:
    path_params: TeamsCheckPermissionsForRepoPathParams = field()
    

@dataclass
class TeamsCheckPermissionsForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    full_repository: Optional[shared.FullRepository] = field(default=None)
    minimal_repository: Optional[shared.MinimalRepository] = field(default=None)
    
