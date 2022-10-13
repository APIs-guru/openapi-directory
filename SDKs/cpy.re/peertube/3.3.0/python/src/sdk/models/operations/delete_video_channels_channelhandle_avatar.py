from dataclasses import dataclass, field



@dataclass
class DeleteVideoChannelsChannelHandleAvatarPathParams:
    channel_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoChannelsChannelHandleAvatarSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoChannelsChannelHandleAvatarRequest:
    path_params: DeleteVideoChannelsChannelHandleAvatarPathParams = field(default=None)
    security: DeleteVideoChannelsChannelHandleAvatarSecurity = field(default=None)
    

@dataclass
class DeleteVideoChannelsChannelHandleAvatarResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
