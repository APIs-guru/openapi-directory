from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoPlaylistVideosPathParams:
    playlist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPlaylistVideosRequest:
    path_params: GetVideoPlaylistVideosPathParams = field(default=None)
    

@dataclass
class GetVideoPlaylistVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_list_response: Optional[Any] = field(default=None)
    
