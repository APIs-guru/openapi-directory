from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class SetProgressPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProgressSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetProgressRequest:
    path_params: SetProgressPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: SetProgressSecurity = field()
    

@dataclass
class SetProgressResponse:
    content_type: str = field()
    status_code: int = field()
    
