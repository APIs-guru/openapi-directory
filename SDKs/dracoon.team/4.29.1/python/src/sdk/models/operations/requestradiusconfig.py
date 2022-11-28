from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestRadiusConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRadiusConfigRequest:
    headers: RequestRadiusConfigHeaders = field()
    

@dataclass
class RequestRadiusConfigResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    radius_config: Optional[shared.RadiusConfig] = field(default=None)
    
