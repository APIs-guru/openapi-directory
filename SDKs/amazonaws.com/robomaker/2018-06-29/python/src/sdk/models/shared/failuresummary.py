from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import worldfailure


@dataclass_json
@dataclass
class FailureSummary:
    failures: Optional[List[worldfailure.WorldFailure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    total_failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFailureCount' }})
    
