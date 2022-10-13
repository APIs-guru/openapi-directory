from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import event
from . import event


@dataclass_json
@dataclass
class Activity:
    combined_event: Optional[event.Event] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combinedEvent' }})
    single_events: Optional[List[event.Event]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleEvents' }})
    
