from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAddonLinkersLinkerKeyPathParams:
    linker_key: str = field(default=None, metadata={'path_param': { 'field_name': 'linker_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddonLinkersLinkerKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAddonLinkersLinkerKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAddonLinkersLinkerKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAddonLinkersLinkerKeySecurity:
    option1: Optional[GetAddonLinkersLinkerKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAddonLinkersLinkerKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetAddonLinkersLinkerKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAddonLinkersLinkerKeyRequest:
    path_params: GetAddonLinkersLinkerKeyPathParams = field(default=None)
    security: GetAddonLinkersLinkerKeySecurity = field(default=None)
    

@dataclass
class GetAddonLinkersLinkerKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
