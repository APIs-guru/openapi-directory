from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import historyevent


@dataclass_json
@dataclass
class GetExecutionHistoryOutput:
    events: List[historyevent.HistoryEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
