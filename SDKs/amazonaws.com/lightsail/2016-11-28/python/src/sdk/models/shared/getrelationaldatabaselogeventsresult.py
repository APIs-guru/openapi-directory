from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logevent


@dataclass_json
@dataclass
class GetRelationalDatabaseLogEventsResult:
    next_backward_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextBackwardToken' }})
    next_forward_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextForwardToken' }})
    resource_log_events: Optional[List[logevent.LogEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceLogEvents' }})
    
