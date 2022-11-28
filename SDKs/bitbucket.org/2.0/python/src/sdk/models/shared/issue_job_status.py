from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class IssueJobStatusStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    STARTED = "STARTED"
    RUNNING = "RUNNING"
    FAILURE = "FAILURE"


@dataclass_json
@dataclass
class IssueJobStatus:
    r"""IssueJobStatus
    The status of an import or export job
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    pct: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pct') }})
    phase: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phase') }})
    status: Optional[IssueJobStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
