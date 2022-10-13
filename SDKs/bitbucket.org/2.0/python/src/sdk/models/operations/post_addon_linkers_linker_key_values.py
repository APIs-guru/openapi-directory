from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAddonLinkersLinkerKeyValuesPathParams:
    linker_key: str = field(default=None, metadata={'path_param': { 'field_name': 'linker_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAddonLinkersLinkerKeyValuesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostAddonLinkersLinkerKeyValuesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostAddonLinkersLinkerKeyValuesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostAddonLinkersLinkerKeyValuesSecurity:
    option1: Optional[PostAddonLinkersLinkerKeyValuesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostAddonLinkersLinkerKeyValuesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostAddonLinkersLinkerKeyValuesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostAddonLinkersLinkerKeyValuesRequest:
    path_params: PostAddonLinkersLinkerKeyValuesPathParams = field(default=None)
    security: PostAddonLinkersLinkerKeyValuesSecurity = field(default=None)
    

@dataclass
class PostAddonLinkersLinkerKeyValuesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
