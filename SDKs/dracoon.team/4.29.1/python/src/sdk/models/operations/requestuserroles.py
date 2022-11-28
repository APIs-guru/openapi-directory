from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestUserRolesPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserRolesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserRolesRequest:
    headers: RequestUserRolesHeaders = field()
    path_params: RequestUserRolesPathParams = field()
    

@dataclass
class RequestUserRolesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_list: Optional[shared.RoleList] = field(default=None)
    
