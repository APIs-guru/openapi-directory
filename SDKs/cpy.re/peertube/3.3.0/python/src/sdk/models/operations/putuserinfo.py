from dataclasses import dataclass, field
from typing import Any


@dataclass
class PutUserInfoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutUserInfoRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutUserInfoSecurity = field(default=None)
    

@dataclass
class PutUserInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
