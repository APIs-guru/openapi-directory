from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestSystemTimeHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSystemTimeRequest:
    headers: RequestSystemTimeHeaders = field(default=None)
    

@dataclass
class RequestSystemTimeResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    sds_server_time: Optional[shared.SdsServerTime] = field(default=None)
    status_code: int = field(default=None)
    
