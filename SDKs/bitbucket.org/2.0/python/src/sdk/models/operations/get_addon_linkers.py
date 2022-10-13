from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAddonLinkersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAddonLinkersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAddonLinkersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAddonLinkersSecurity:
    option1: Optional[GetAddonLinkersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAddonLinkersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetAddonLinkersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAddonLinkersRequest:
    security: GetAddonLinkersSecurity = field(default=None)
    

@dataclass
class GetAddonLinkersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
