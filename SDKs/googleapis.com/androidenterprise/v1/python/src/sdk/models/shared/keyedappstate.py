from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class KeyedAppStateSeverityEnum(str, Enum):
    SEVERITY_UNKNOWN = "severityUnknown"
    SEVERITY_INFO = "severityInfo"
    SEVERITY_ERROR = "severityError"


@dataclass_json
@dataclass
class KeyedAppState:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    severity: Optional[KeyedAppStateSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    state_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTimestampMillis' }})
    
