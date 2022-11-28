from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KeyedAppStateSeverityEnum(str, Enum):
    SEVERITY_UNKNOWN = "severityUnknown"
    SEVERITY_INFO = "severityInfo"
    SEVERITY_ERROR = "severityError"


@dataclass_json
@dataclass
class KeyedAppState:
    r"""KeyedAppState
    Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    severity: Optional[KeyedAppStateSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    state_timestamp_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTimestampMillis') }})
    
