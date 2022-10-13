from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestActiveDirectoryAuthInfoQueryParams:
    is_global_available: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_global_available', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestActiveDirectoryAuthInfoRequest:
    query_params: RequestActiveDirectoryAuthInfoQueryParams = field(default=None)
    

@dataclass
class RequestActiveDirectoryAuthInfoResponse:
    active_directory_auth_info: Optional[shared.ActiveDirectoryAuthInfo] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
