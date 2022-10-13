from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateLiveIDPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLiveIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateLiveIDRequest:
    path_params: UpdateLiveIDPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateLiveIDSecurity = field(default=None)
    

@dataclass
class UpdateLiveIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
