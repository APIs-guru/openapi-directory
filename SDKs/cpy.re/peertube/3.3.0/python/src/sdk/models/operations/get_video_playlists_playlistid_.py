from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideoPlaylistsPlaylistIDPathParams:
    playlist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoPlaylistsPlaylistIDRequest:
    path_params: GetVideoPlaylistsPlaylistIDPathParams = field(default=None)
    

@dataclass
class GetVideoPlaylistsPlaylistIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_playlist: Optional[Any] = field(default=None)
    
