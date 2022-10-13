from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventsummary


@dataclass_json
@dataclass
class ListTimelineEventsOutput:
    event_summaries: List[eventsummary.EventSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
