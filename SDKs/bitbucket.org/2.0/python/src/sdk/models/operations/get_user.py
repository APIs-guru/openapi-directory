from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserSecurity:
    option1: Optional[GetUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserRequest:
    security: GetUserSecurity = field(default=None)
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    user: Optional[dict[str, Any]] = field(default=None)
    
