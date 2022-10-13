from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTeamsForUserPathParams:
    user_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsForUserQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    organization: str = field(default=None, metadata={'query_param': { 'field_name': 'organization', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsForUserRequest:
    path_params: GetTeamsForUserPathParams = field(default=None)
    query_params: GetTeamsForUserQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTeamsForUser200ApplicationJSON:
    data: Optional[List[shared.TeamCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetTeamsForUserResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_teams_for_user_200_application_json_object: Optional[GetTeamsForUser200ApplicationJSON] = field(default=None)
    
