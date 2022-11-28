from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLiveIDPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLiveIDSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLiveIDRequest:
    path_params: GetLiveIDPathParams = field()
    security: GetLiveIDSecurity = field()
    

@dataclass
class GetLiveIDResponse:
    content_type: str = field()
    status_code: int = field()
    live_video_response: Optional[Any] = field(default=None)
    
