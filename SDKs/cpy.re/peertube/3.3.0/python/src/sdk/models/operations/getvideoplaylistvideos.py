from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoPlaylistVideosPathParams:
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPlaylistVideosRequest:
    path_params: GetVideoPlaylistVideosPathParams = field()
    

@dataclass
class GetVideoPlaylistVideosResponse:
    content_type: str = field()
    status_code: int = field()
    video_list_response: Optional[Any] = field(default=None)
    
