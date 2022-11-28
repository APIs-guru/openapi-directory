from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentAttributesArtwork:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ContentAttributes:
    album_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('albumName') }})
    artist_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistName') }})
    artwork: Optional[ContentAttributesArtwork] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artwork') }})
    composer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('composerName') }})
    duration_in_millis: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationInMillis') }})
    genre_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genreNames') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    track_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackNumber') }})
    
