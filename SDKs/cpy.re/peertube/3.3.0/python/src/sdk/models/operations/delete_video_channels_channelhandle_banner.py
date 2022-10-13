from dataclasses import dataclass, field



@dataclass
class DeleteVideoChannelsChannelHandleBannerPathParams:
    channel_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoChannelsChannelHandleBannerSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoChannelsChannelHandleBannerRequest:
    path_params: DeleteVideoChannelsChannelHandleBannerPathParams = field(default=None)
    security: DeleteVideoChannelsChannelHandleBannerSecurity = field(default=None)
    

@dataclass
class DeleteVideoChannelsChannelHandleBannerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
