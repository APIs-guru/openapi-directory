from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVideoChannelsChannelHandleBannerPathParams:
    channel_handle: str = field(metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoChannelsChannelHandleBannerSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoChannelsChannelHandleBannerRequest:
    path_params: DeleteVideoChannelsChannelHandleBannerPathParams = field()
    security: DeleteVideoChannelsChannelHandleBannerSecurity = field()
    

@dataclass
class DeleteVideoChannelsChannelHandleBannerResponse:
    content_type: str = field()
    status_code: int = field()
    
