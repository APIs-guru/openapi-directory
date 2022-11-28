from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSystemInfoQueryParams:
    is_enabled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_enabled', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestSystemInfoRequest:
    query_params: RequestSystemInfoQueryParams = field()
    

@dataclass
class RequestSystemInfoResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    system_info: Optional[shared.SystemInfo] = field(default=None)
    
