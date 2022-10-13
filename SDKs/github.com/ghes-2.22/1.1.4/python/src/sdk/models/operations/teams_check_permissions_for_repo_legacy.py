from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForRepoLegacyPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForRepoLegacyRequest:
    path_params: TeamsCheckPermissionsForRepoLegacyPathParams = field(default=None)
    

@dataclass
class TeamsCheckPermissionsForRepoLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_repository: Optional[shared.TeamRepository] = field(default=None)
    
