from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateProjectForTeamPathParams:
    team_gid: str = field(metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProjectForTeamQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateProjectForTeamRequestBodyInput:
    data: Optional[shared.ProjectRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateProjectForTeam201ApplicationJSON:
    data: Optional[shared.ProjectResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateProjectForTeamRequest:
    path_params: CreateProjectForTeamPathParams = field()
    query_params: CreateProjectForTeamQueryParams = field()
    request: CreateProjectForTeamRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProjectForTeamResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_project_for_team_201_application_json_object: Optional[CreateProjectForTeam201ApplicationJSON] = field(default=None)
    
