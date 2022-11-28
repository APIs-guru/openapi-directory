from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DelVideoChannelPathParams:
    channel_handle: str = field(metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoChannelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoChannelRequest:
    path_params: DelVideoChannelPathParams = field()
    security: DelVideoChannelSecurity = field()
    

@dataclass
class DelVideoChannelResponse:
    content_type: str = field()
    status_code: int = field()
    
