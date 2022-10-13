from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ApplicationEventEventTypeEnum(str, Enum):
    APPLICATION_EVENT_TYPE_UNSPECIFIED = "APPLICATION_EVENT_TYPE_UNSPECIFIED"
    INSTALLED = "INSTALLED"
    CHANGED = "CHANGED"
    DATA_CLEARED = "DATA_CLEARED"
    REMOVED = "REMOVED"
    REPLACED = "REPLACED"
    RESTARTED = "RESTARTED"
    PINNED = "PINNED"
    UNPINNED = "UNPINNED"


@dataclass_json
@dataclass
class ApplicationEvent:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    event_type: Optional[ApplicationEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    
