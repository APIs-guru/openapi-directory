from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutVideoChannelPathParams:
    channel_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutVideoChannelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutVideoChannelRequest:
    path_params: PutVideoChannelPathParams = field(default=None)
    request: Optional[shared.VideoChannelUpdate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutVideoChannelSecurity = field(default=None)
    

@dataclass
class PutVideoChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
