from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAddonLinkersLinkerKeyValuesPathParams:
    linker_key: str = field(default=None, metadata={'path_param': { 'field_name': 'linker_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddonLinkersLinkerKeyValuesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAddonLinkersLinkerKeyValuesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAddonLinkersLinkerKeyValuesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAddonLinkersLinkerKeyValuesSecurity:
    option1: Optional[GetAddonLinkersLinkerKeyValuesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAddonLinkersLinkerKeyValuesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetAddonLinkersLinkerKeyValuesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAddonLinkersLinkerKeyValuesRequest:
    path_params: GetAddonLinkersLinkerKeyValuesPathParams = field(default=None)
    security: GetAddonLinkersLinkerKeyValuesSecurity = field(default=None)
    

@dataclass
class GetAddonLinkersLinkerKeyValuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
