from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetUserInfoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserInfoRequest:
    security: GetUserInfoSecurity = field()
    

@dataclass
class GetUserInfoResponse:
    content_type: str = field()
    status_code: int = field()
    users: Optional[List[Any]] = field(default=None)
    
