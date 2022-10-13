from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIResponseSongResponseResults:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class APIResponseSongResponse:
    results: Optional[List[APIResponseSongResponseResults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class APIResponseSong:
    error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    response: Optional[APIResponseSongResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    
