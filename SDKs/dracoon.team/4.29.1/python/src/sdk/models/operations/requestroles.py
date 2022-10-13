from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestRolesHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestRolesRequest:
    headers: RequestRolesHeaders = field(default=None)
    

@dataclass
class RequestRolesResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    role_list: Optional[shared.RoleList] = field(default=None)
    status_code: int = field(default=None)
    
