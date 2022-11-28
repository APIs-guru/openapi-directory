from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutVideoPlaylistVideoPathParams:
    playlist_element_id: int = field(metadata={'path_param': { 'field_name': 'playlistElementId', 'style': 'simple', 'explode': False }})
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutVideoPlaylistVideoRequestBody:
    start_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimestamp') }})
    stop_timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopTimestamp') }})
    

@dataclass
class PutVideoPlaylistVideoSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutVideoPlaylistVideoRequest:
    path_params: PutVideoPlaylistVideoPathParams = field()
    security: PutVideoPlaylistVideoSecurity = field()
    request: Optional[PutVideoPlaylistVideoRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutVideoPlaylistVideoResponse:
    content_type: str = field()
    status_code: int = field()
    
