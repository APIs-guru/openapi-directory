from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoChannelsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideoChannelsRequest:
    query_params: GetVideoChannelsQueryParams = field(default=None)
    

@dataclass
class GetVideoChannelsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_channel_list: Optional[Any] = field(default=None)
    
