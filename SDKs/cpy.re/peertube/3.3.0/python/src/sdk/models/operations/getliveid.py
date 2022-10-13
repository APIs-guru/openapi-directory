from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLiveIDPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLiveIDRequest:
    path_params: GetLiveIDPathParams = field(default=None)
    security: GetLiveIDSecurity = field(default=None)
    

@dataclass
class GetLiveIDResponse:
    content_type: str = field(default=None)
    live_video_response: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
