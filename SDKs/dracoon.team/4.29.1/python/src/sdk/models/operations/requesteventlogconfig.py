from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestEventlogConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RequestEventlogConfigRequest:
    headers: RequestEventlogConfigHeaders = field(default=None)
    

@dataclass
class RequestEventlogConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    eventlog_config: Optional[shared.EventlogConfig] = field(default=None)
    status_code: int = field(default=None)
    
