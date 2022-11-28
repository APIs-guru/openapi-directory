from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DelCustomConfigSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelCustomConfigRequest:
    security: DelCustomConfigSecurity = field()
    

@dataclass
class DelCustomConfigResponse:
    content_type: str = field()
    status_code: int = field()
    
