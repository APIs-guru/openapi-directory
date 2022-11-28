from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddVideoPlaylistVideoPathParams:
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoPlaylistVideoRequestBody:
    video_id: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp') }})
    stop_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTimestamp') }})
    

@dataclass
class AddVideoPlaylistVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class AddVideoPlaylistVideo200ApplicationJSONVideoPlaylistElement:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class AddVideoPlaylistVideo200ApplicationJSON:
    video_playlist_element: Optional[AddVideoPlaylistVideo200ApplicationJSONVideoPlaylistElement] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlaylistElement') }})
    

@dataclass
class AddVideoPlaylistVideoRequest:
    path_params: AddVideoPlaylistVideoPathParams = field()
    security: AddVideoPlaylistVideoSecurity = field()
    request: Optional[AddVideoPlaylistVideoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddVideoPlaylistVideoResponse:
    content_type: str = field()
    status_code: int = field()
    add_video_playlist_video_200_application_json_object: Optional[AddVideoPlaylistVideo200ApplicationJSON] = field(default=None)
    
