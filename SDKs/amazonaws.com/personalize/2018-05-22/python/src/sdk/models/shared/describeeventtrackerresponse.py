from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventtracker


@dataclass_json
@dataclass
class DescribeEventTrackerResponse:
    event_tracker: Optional[eventtracker.EventTracker] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTracker' }})
    
