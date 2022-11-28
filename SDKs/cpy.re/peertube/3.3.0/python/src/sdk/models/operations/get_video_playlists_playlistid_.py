from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoPlaylistsPlaylistIDPathParams:
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPlaylistsPlaylistIDRequest:
    path_params: GetVideoPlaylistsPlaylistIDPathParams = field()
    

@dataclass
class GetVideoPlaylistsPlaylistIDResponse:
    content_type: str = field()
    status_code: int = field()
    video_playlist: Optional[Any] = field(default=None)
    
