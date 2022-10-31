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
    query_params: LogoutQueryParams = field(default=None)
    headers: LogoutHeaders = field(default=None)
    

@dataclass
class LogoutResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
