from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSystemDefaultsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestSystemDefaultsRequest:
    headers: RequestSystemDefaultsHeaders = field(default=None)
    

@dataclass
class RequestSystemDefaultsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    system_defaults: Optional[shared.SystemDefaults] = field(default=None)
    
