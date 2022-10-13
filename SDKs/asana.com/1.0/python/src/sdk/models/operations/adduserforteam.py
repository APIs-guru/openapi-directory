from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddUserForTeamPathParams:
    team_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddUserForTeamQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddUserForTeamRequestBody:
    data: Optional[shared.TeamAddUserRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class AddUserForTeamRequest:
    path_params: AddUserForTeamPathParams = field(default=None)
    query_params: AddUserForTeamQueryParams = field(default=None)
    request: AddUserForTeamRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class AddUserForTeam200ApplicationJSON:
    data: Optional[shared.UserResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class AddUserForTeamResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    add_user_for_team_200_application_json_object: Optional[AddUserForTeam200ApplicationJSON] = field(default=None)
    
