from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPluginPathParams:
    npm_name: str = field(metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPluginRequest:
    path_params: GetPluginPathParams = field()
    security: GetPluginSecurity = field()
    

@dataclass
class GetPluginResponse:
    content_type: str = field()
    status_code: int = field()
    plugin: Optional[Any] = field(default=None)
    
