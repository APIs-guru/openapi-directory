from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RevokeOAuthTokenSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RevokeOAuthTokenRequest:
    security: RevokeOAuthTokenSecurity = field()
    

@dataclass
class RevokeOAuthTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
