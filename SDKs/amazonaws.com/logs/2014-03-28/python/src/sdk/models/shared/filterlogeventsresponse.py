from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filteredlogevent
from . import searchedlogstream


@dataclass_json
@dataclass
class FilterLogEventsResponse:
    events: Optional[List[filteredlogevent.FilteredLogEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    searched_log_streams: Optional[List[searchedlogstream.SearchedLogStream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchedLogStreams' }})
    
