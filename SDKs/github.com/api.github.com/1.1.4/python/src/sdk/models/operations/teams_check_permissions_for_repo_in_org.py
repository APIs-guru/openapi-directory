from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForRepoInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    team_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForRepoInOrgRequest:
    path_params: TeamsCheckPermissionsForRepoInOrgPathParams = field(default=None)
    

@dataclass
class TeamsCheckPermissionsForRepoInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    team_repository: Optional[shared.TeamRepository] = field(default=None)
    
