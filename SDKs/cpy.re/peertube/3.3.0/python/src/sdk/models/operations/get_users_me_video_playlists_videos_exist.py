from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUsersMeVideoPlaylistsVideosExistQueryParams:
    video_ids: List[int] = field(metadata={'query_param': { 'field_name': 'videoIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeVideoPlaylistsVideosExistSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONVideoID:
    playlist_element_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistElementId') }})
    playlist_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistId') }})
    start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp') }})
    stop_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTimestamp') }})
    

@dataclass_json
@dataclass
class GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON:
    video_id: Optional[List[GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONVideoID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    

@dataclass
class GetUsersMeVideoPlaylistsVideosExistRequest:
    query_params: GetUsersMeVideoPlaylistsVideosExistQueryParams = field()
    security: GetUsersMeVideoPlaylistsVideosExistSecurity = field()
    

@dataclass
class GetUsersMeVideoPlaylistsVideosExistResponse:
    content_type: str = field()
    status_code: int = field()
    get_users_me_video_playlists_videos_exist_200_application_json_object: Optional[GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON] = field(default=None)
    
