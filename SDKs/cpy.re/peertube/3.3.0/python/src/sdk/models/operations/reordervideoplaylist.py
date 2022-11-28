from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReorderVideoPlaylistPathParams:
    playlist_id: int = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReorderVideoPlaylistRequestBody:
    insert_after_position: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertAfterPosition') }})
    start_position: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startPosition') }})
    reorder_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reorderLength') }})
    

@dataclass
class ReorderVideoPlaylistSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ReorderVideoPlaylistRequest:
    path_params: ReorderVideoPlaylistPathParams = field()
    security: ReorderVideoPlaylistSecurity = field()
    request: Optional[ReorderVideoPlaylistRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReorderVideoPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    
