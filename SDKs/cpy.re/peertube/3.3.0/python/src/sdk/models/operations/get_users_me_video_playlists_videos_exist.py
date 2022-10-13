from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetUsersMeVideoPlaylistsVideosExistQueryParams:
    video_ids: List[int] = field(default=None, metadata={'query_param': { 'field_name': 'videoIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeVideoPlaylistsVideosExistSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeVideoPlaylistsVideosExistRequest:
    query_params: GetUsersMeVideoPlaylistsVideosExistQueryParams = field(default=None)
    security: GetUsersMeVideoPlaylistsVideosExistSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONVideoID:
    playlist_element_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlistElementId' }})
    playlist_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playlistId' }})
    start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimestamp' }})
    stop_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopTimestamp' }})
    

@dataclass_json
@dataclass
class GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON:
    video_id: Optional[List[GetUsersMeVideoPlaylistsVideosExist200ApplicationJSONVideoID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoId' }})
    

@dataclass
class GetUsersMeVideoPlaylistsVideosExistResponse:
    content_type: str = field(default=None)
    get_users_me_video_playlists_videos_exist_200_application_json_object: Optional[GetUsersMeVideoPlaylistsVideosExist200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
