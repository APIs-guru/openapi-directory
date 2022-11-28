from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class DelVideoPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoRequest:
    path_params: DelVideoPathParams = field()
    security: DelVideoSecurity = field()
    

@dataclass
class DelVideoResponse:
    content_type: str = field()
    status_code: int = field()
    
