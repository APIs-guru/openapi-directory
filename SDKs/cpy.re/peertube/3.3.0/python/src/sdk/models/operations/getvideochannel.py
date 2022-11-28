from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoChannelPathParams:
    channel_handle: str = field(metadata={'path_param': { 'field_name': 'channelHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoChannelRequest:
    path_params: GetVideoChannelPathParams = field()
    

@dataclass
class GetVideoChannelResponse:
    content_type: str = field()
    status_code: int = field()
    video_channel: Optional[Any] = field(default=None)
    
