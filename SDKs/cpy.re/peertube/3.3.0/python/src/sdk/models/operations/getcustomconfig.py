from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetCustomConfigSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCustomConfigRequest:
    security: GetCustomConfigSecurity = field()
    

@dataclass
class GetCustomConfigResponse:
    content_type: str = field()
    status_code: int = field()
    server_config_custom: Optional[Any] = field(default=None)
    
