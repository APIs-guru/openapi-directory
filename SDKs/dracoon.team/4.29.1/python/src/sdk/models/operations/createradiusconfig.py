from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateRadiusConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRadiusConfigRequest:
    headers: CreateRadiusConfigHeaders = field(default=None)
    request: shared.RadiusConfigCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRadiusConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    radius_config: Optional[shared.RadiusConfig] = field(default=None)
    status_code: int = field(default=None)
    
