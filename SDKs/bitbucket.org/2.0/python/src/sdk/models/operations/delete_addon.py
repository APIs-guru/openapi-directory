from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAddonSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAddonSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAddonSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAddonSecurity:
    option1: Optional[DeleteAddonSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteAddonSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteAddonSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteAddonRequest:
    security: DeleteAddonSecurity = field(default=None)
    

@dataclass
class DeleteAddonResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
