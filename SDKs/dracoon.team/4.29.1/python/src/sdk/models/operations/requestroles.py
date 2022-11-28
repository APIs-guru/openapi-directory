from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestRolesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRolesRequest:
    headers: RequestRolesHeaders = field()
    

@dataclass
class RequestRolesResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_list: Optional[shared.RoleList] = field(default=None)
    
