from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateEventlogConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEventlogConfigRequest:
    headers: UpdateEventlogConfigHeaders = field(default=None)
    request: shared.UpdateEventlogConfig = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEventlogConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    eventlog_config: Optional[shared.EventlogConfig] = field(default=None)
    status_code: int = field(default=None)
    
