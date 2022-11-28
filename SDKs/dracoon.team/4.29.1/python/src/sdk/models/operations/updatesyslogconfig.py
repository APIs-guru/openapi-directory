from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSyslogConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSyslogConfigRequest:
    headers: UpdateSyslogConfigHeaders = field()
    request: shared.UpdateSyslogConfig = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSyslogConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    syslog_config: Optional[shared.SyslogConfig] = field(default=None)
    
