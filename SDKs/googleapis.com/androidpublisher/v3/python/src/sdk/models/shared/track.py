from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trackrelease


@dataclass_json
@dataclass
class Track:
    releases: Optional[List[trackrelease.TrackRelease]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releases' }})
    track: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    
