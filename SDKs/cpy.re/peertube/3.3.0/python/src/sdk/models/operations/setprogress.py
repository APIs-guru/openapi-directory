from dataclasses import dataclass, field
from typing import Any


@dataclass
class SetProgressPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProgressSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetProgressRequest:
    path_params: SetProgressPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SetProgressSecurity = field(default=None)
    

@dataclass
class SetProgressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
