from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RemoveUserForTeamPathParams:
    team_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'team_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserForTeamQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class RemoveUserForTeamRequestBody:
    data: Optional[shared.TeamRemoveUserRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveUserForTeamRequest:
    path_params: RemoveUserForTeamPathParams = field(default=None)
    query_params: RemoveUserForTeamQueryParams = field(default=None)
    request: RemoveUserForTeamRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class RemoveUserForTeam204ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class RemoveUserForTeamResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    remove_user_for_team_204_application_json_object: Optional[RemoveUserForTeam204ApplicationJSON] = field(default=None)
    
