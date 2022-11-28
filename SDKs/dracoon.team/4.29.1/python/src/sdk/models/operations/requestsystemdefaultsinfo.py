from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSystemDefaultsInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSystemDefaultsInfoRequest:
    headers: RequestSystemDefaultsInfoHeaders = field()
    

@dataclass
class RequestSystemDefaultsInfoResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    system_defaults: Optional[shared.SystemDefaults] = field(default=None)
    
