from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestAuthConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestAuthConfigRequest:
    headers: RequestAuthConfigHeaders = field(default=None)
    

@dataclass
class RequestAuthConfigResponse:
    auth_config: Optional[shared.AuthConfig] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
