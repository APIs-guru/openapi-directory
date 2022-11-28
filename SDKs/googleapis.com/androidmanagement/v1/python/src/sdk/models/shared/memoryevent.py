from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MemoryEventEventTypeEnum(str, Enum):
    MEMORY_EVENT_TYPE_UNSPECIFIED = "MEMORY_EVENT_TYPE_UNSPECIFIED"
    RAM_MEASURED = "RAM_MEASURED"
    INTERNAL_STORAGE_MEASURED = "INTERNAL_STORAGE_MEASURED"
    EXTERNAL_STORAGE_DETECTED = "EXTERNAL_STORAGE_DETECTED"
    EXTERNAL_STORAGE_REMOVED = "EXTERNAL_STORAGE_REMOVED"
    EXTERNAL_STORAGE_MEASURED = "EXTERNAL_STORAGE_MEASURED"


@dataclass_json
@dataclass
class MemoryEvent:
    r"""MemoryEvent
    An event related to memory and storage measurements.
    """
    
    byte_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteCount') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    event_type: Optional[MemoryEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    
