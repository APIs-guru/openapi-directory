from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestOpenIDAuthInfoQueryParams:
    is_global_available: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_global_available', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestOpenIDAuthInfoRequest:
    query_params: RequestOpenIDAuthInfoQueryParams = field()
    

@dataclass
class RequestOpenIDAuthInfoResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    open_id_auth_info: Optional[shared.OpenIDAuthInfo] = field(default=None)
    
