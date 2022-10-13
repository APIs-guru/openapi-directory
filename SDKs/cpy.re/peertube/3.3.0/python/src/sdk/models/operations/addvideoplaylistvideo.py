from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class AddVideoPlaylistVideoPathParams:
    playlist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoPlaylistVideoRequestBody:
    start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimestamp' }})
    stop_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopTimestamp' }})
    video_id: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    

@dataclass
class AddVideoPlaylistVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoPlaylistVideoRequest:
    path_params: AddVideoPlaylistVideoPathParams = field(default=None)
    request: Optional[AddVideoPlaylistVideoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddVideoPlaylistVideoSecurity = field(default=None)
    

@dataclass_json
@dataclass
class AddVideoPlaylistVideo200ApplicationJSONVideoPlaylistElement:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class AddVideoPlaylistVideo200ApplicationJSON:
    video_playlist_element: Optional[AddVideoPlaylistVideo200ApplicationJSONVideoPlaylistElement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPlaylistElement' }})
    

@dataclass
class AddVideoPlaylistVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    add_video_playlist_video_200_application_json_object: Optional[AddVideoPlaylistVideo200ApplicationJSON] = field(default=None)
    
