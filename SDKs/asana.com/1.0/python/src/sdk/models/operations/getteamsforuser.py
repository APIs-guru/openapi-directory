from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTeamsForUserPathParams:
    user_gid: str = field(metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsForUserQueryParams:
    organization: str = field(metadata={'query_param': { 'field_name': 'organization', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetTeamsForUser200ApplicationJSON:
    data: Optional[List[shared.TeamCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetTeamsForUserRequest:
    path_params: GetTeamsForUserPathParams = field()
    query_params: GetTeamsForUserQueryParams = field()
    

@dataclass
class GetTeamsForUserResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_teams_for_user_200_application_json_object: Optional[GetTeamsForUser200ApplicationJSON] = field(default=None)
    
