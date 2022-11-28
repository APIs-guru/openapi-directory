from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVideoChannelsChannelHandleAvatarPathParams:
    channel_handle: str = field(metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoChannelsChannelHandleAvatarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoChannelsChannelHandleAvatarRequest:
    path_params: DeleteVideoChannelsChannelHandleAvatarPathParams = field()
    security: DeleteVideoChannelsChannelHandleAvatarSecurity = field()
    

@dataclass
class DeleteVideoChannelsChannelHandleAvatarResponse:
    content_type: str = field()
    status_code: int = field()
    
