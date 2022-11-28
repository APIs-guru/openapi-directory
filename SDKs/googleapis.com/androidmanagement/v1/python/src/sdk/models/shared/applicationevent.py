from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ApplicationEvent
    An app-related event.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    event_type: Optional[ApplicationEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    
