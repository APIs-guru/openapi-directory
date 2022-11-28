from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProjectsForTeamPathParams:
    team_gid: str = field(metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectsForTeamQueryParams:
    archived: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'archived', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetProjectsForTeam200ApplicationJSON:
    data: Optional[List[shared.ProjectCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetProjectsForTeamRequest:
    path_params: GetProjectsForTeamPathParams = field()
    query_params: GetProjectsForTeamQueryParams = field()
    

@dataclass
class GetProjectsForTeamResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_projects_for_team_200_application_json_object: Optional[GetProjectsForTeam200ApplicationJSON] = field(default=None)
    
