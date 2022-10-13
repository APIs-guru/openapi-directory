from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrainingJobStatusCounters:
    completed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Completed' }})
    in_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InProgress' }})
    non_retryable_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonRetryableError' }})
    retryable_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RetryableError' }})
    stopped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Stopped' }})
    
