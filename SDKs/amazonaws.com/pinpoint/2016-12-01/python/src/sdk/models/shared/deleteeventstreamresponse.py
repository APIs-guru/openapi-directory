from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import eventstream


@dataclass_json
@dataclass
class DeleteEventStreamResponse:
    event_stream: eventstream.EventStream = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventStream' }})
    
