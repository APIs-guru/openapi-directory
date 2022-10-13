from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginPathParams:
    npm_name: str = field(default=None, metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPluginRequest:
    path_params: GetPluginPathParams = field(default=None)
    security: GetPluginSecurity = field(default=None)
    

@dataclass
class GetPluginResponse:
    content_type: str = field(default=None)
    plugin: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
