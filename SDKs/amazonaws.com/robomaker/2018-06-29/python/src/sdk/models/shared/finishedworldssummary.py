from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failuresummary


@dataclass_json
@dataclass
class FinishedWorldsSummary:
    failure_summary: Optional[failuresummary.FailureSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureSummary' }})
    finished_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finishedCount' }})
    succeeded_worlds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeededWorlds' }})
    
