from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForRepoLegacyPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForRepoLegacyRequest:
    path_params: TeamsCheckPermissionsForRepoLegacyPathParams = field()
    

@dataclass
class TeamsCheckPermissionsForRepoLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    team_repository: Optional[shared.TeamRepository] = field(default=None)
    
