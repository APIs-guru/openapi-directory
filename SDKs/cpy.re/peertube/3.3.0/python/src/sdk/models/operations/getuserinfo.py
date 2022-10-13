from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetUserInfoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserInfoRequest:
    security: GetUserInfoSecurity = field(default=None)
    

@dataclass
class GetUserInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[Any]] = field(default=None)
    
