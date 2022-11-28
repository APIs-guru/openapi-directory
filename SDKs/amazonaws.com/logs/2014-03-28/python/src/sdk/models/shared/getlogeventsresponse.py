from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetLogEventsResponse:
    events: Optional[List[OutputLogEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    next_backward_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextBackwardToken') }})
    next_forward_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextForwardToken') }})
    
