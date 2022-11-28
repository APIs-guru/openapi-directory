from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestGroupRolesPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestGroupRolesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestGroupRolesRequest:
    headers: RequestGroupRolesHeaders = field()
    path_params: RequestGroupRolesPathParams = field()
    

@dataclass
class RequestGroupRolesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_list: Optional[shared.RoleList] = field(default=None)
    
