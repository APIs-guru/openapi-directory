from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventtrackersummary


@dataclass_json
@dataclass
class ListEventTrackersResponse:
    event_trackers: Optional[List[eventtrackersummary.EventTrackerSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTrackers' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
