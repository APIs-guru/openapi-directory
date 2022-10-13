from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProgressCounters:
    cancelled_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CancelledSteps' }})
    failed_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedSteps' }})
    success_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuccessSteps' }})
    timed_out_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimedOutSteps' }})
    total_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalSteps' }})
    
