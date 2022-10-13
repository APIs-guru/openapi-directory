from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestUserRolesPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserRolesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestUserRolesRequest:
    path_params: RequestUserRolesPathParams = field(default=None)
    headers: RequestUserRolesHeaders = field(default=None)
    

@dataclass
class RequestUserRolesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_list: Optional[shared.RoleList] = field(default=None)
    status_code: int = field(default=None)
    
