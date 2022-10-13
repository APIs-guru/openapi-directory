from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserPathParams:
    user_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'user_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field(default=None)
    query_params: GetUserQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetUser200ApplicationJSON:
    data: Optional[shared.UserResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_user_200_application_json_object: Optional[GetUser200ApplicationJSON] = field(default=None)
    
