from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIResponseSongResponseResults:
    r"""APIResponseSongResponseResults
    Song item.
    """
    
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class APIResponseSongResponse:
    r"""APIResponseSongResponse
    Contains the response data if the request was successful.
    """
    
    results: Optional[List[APIResponseSongResponseResults]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class APIResponseSong:
    error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: Optional[APIResponseSongResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    
