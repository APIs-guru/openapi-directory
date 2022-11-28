from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class PutUserInfoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutUserInfoRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutUserInfoSecurity = field()
    

@dataclass
class PutUserInfoResponse:
    content_type: str = field()
    status_code: int = field()
    
