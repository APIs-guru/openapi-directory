from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import track


@dataclass_json
@dataclass
class TracksListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    tracks: Optional[List[track.Track]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    
