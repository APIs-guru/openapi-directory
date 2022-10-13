from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import eventsresponse


@dataclass_json
@dataclass
class PutEventsResponse:
    events_response: eventsresponse.EventsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventsResponse' }})
    
