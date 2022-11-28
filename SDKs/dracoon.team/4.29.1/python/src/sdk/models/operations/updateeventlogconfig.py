from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEventlogConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEventlogConfigRequest:
    headers: UpdateEventlogConfigHeaders = field()
    request: shared.UpdateEventlogConfig = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEventlogConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    eventlog_config: Optional[shared.EventlogConfig] = field(default=None)
    
