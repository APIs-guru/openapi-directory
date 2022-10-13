from dataclasses import dataclass, field



@dataclass
class DelVideoChannelPathParams:
    channel_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DelVideoChannelSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DelVideoChannelRequest:
    path_params: DelVideoChannelPathParams = field(default=None)
    security: DelVideoChannelSecurity = field(default=None)
    

@dataclass
class DelVideoChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
