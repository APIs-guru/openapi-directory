from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsCheckPermissionsForProjectInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    project_id: int = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    team_slug: str = field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsCheckPermissionsForProjectInOrgRequest:
    path_params: TeamsCheckPermissionsForProjectInOrgPathParams = field()
    

@dataclass
class TeamsCheckPermissionsForProjectInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    team_project: Optional[shared.TeamProject] = field(default=None)
    
