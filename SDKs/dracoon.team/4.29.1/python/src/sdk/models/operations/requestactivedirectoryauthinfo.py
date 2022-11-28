from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestActiveDirectoryAuthInfoQueryParams:
    is_global_available: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_global_available', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestActiveDirectoryAuthInfoRequest:
    query_params: RequestActiveDirectoryAuthInfoQueryParams = field()
    

@dataclass
class RequestActiveDirectoryAuthInfoResponse:
    content_type: str = field()
    status_code: int = field()
    active_directory_auth_info: Optional[shared.ActiveDirectoryAuthInfo] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
