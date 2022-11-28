from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventsSearchResult:
    events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result_count') }})
    
