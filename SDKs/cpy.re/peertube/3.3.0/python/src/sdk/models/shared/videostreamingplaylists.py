from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoStreamingPlaylistsRedundancies:
    base_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseUrl') }})
    

@dataclass_json
@dataclass
class VideoStreamingPlaylists:
    files: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    playlist_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistUrl') }})
    redundancies: Optional[List[VideoStreamingPlaylistsRedundancies]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redundancies') }})
    segments_sha256_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentsSha256Url') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
