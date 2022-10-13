from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class Event:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    session: Optional[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    timestamp: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
