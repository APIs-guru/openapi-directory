from dataclasses import dataclass, field
from typing import Any


@dataclass
class DelVideoPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoRequest:
    path_params: DelVideoPathParams = field(default=None)
    security: DelVideoSecurity = field(default=None)
    

@dataclass
class DelVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
