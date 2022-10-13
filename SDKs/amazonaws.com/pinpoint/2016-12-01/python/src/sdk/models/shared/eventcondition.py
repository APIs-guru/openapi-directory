from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import eventdimensions


@dataclass_json
@dataclass
class EventCondition:
    dimensions: Optional[eventdimensions.EventDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    message_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MessageActivity' }})
    
