from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCustomConfigSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCustomConfigRequest:
    security: GetCustomConfigSecurity = field(default=None)
    

@dataclass
class GetCustomConfigResponse:
    content_type: str = field(default=None)
    server_config_custom: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
