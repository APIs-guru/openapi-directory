from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSyslogConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSyslogConfigRequest:
    headers: RequestSyslogConfigHeaders = field(default=None)
    

@dataclass
class RequestSyslogConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    syslog_config: Optional[shared.SyslogConfig] = field(default=None)
    
