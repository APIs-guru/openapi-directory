from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAddonSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutAddonSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutAddonSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutAddonSecurity:
    option1: Optional[PutAddonSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutAddonSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutAddonSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutAddonRequest:
    security: PutAddonSecurity = field(default=None)
    

@dataclass
class PutAddonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
