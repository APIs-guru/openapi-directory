from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class IssueJobStatusStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    STARTED = "STARTED"
    RUNNING = "RUNNING"
    FAILURE = "FAILURE"


@dataclass_json
@dataclass
class IssueJobStatus:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pct' }})
    phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    status: Optional[IssueJobStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
