from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ReorderVideoPlaylistPathParams:
    playlist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReorderVideoPlaylistRequestBody:
    insert_after_position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertAfterPosition' }})
    reorder_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reorderLength' }})
    start_position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startPosition' }})
    

@dataclass
class ReorderVideoPlaylistSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReorderVideoPlaylistRequest:
    path_params: ReorderVideoPlaylistPathParams = field(default=None)
    request: Optional[ReorderVideoPlaylistRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ReorderVideoPlaylistSecurity = field(default=None)
    

@dataclass
class ReorderVideoPlaylistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
