from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutCustomConfigSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutCustomConfigRequest:
    security: PutCustomConfigSecurity = field()
    

@dataclass
class PutCustomConfigResponse:
    content_type: str = field()
    status_code: int = field()
    
