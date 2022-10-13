from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import timelineevent


@dataclass_json
@dataclass
class GetTimelineEventOutput:
    event: timelineevent.TimelineEvent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    
