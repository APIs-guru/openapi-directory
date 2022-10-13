from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import publicendpoint
from . import event


@dataclass_json
@dataclass
class EventsBatch:
    endpoint: publicendpoint.PublicEndpoint = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoint' }})
    events: dict[str, event.Event] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Events' }})
    
