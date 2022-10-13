from dataclasses import dataclass, field



@dataclass
class RevokeOAuthTokenSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RevokeOAuthTokenRequest:
    security: RevokeOAuthTokenSecurity = field(default=None)
    

@dataclass
class RevokeOAuthTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
