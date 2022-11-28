from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogoutQueryParams:
    everywhere: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'everywhere', 'style': 'form', 'explode': True }})
    

@dataclass
class LogoutHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogoutRequest:
    headers: LogoutHeaders = field()
    query_params: LogoutQueryParams = field()
    

@dataclass
class LogoutResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
