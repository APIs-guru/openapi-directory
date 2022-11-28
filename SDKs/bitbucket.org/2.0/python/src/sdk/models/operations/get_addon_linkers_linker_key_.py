from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAddonLinkersLinkerKeyPathParams:
    linker_key: str = field(metadata={'path_param': { 'field_name': 'linker_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddonLinkersLinkerKeySecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAddonLinkersLinkerKeyRequest:
    path_params: GetAddonLinkersLinkerKeyPathParams = field()
    security: GetAddonLinkersLinkerKeySecurity = field()
    

@dataclass
class GetAddonLinkersLinkerKeyResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
