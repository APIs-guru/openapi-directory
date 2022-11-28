from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FilterLogEventsResponse:
    events: Optional[List[FilteredLogEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    searched_log_streams: Optional[List[SearchedLogStream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('searchedLogStreams') }})
    
