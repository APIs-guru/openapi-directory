from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoChannelPathParams:
    channel_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoChannelRequest:
    path_params: GetVideoChannelPathParams = field(default=None)
    

@dataclass
class GetVideoChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_channel: Optional[Any] = field(default=None)
    
