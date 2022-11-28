from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TrainingJobStatusCounters:
    r"""TrainingJobStatusCounters
    The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
    """
    
    completed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Completed') }})
    in_progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InProgress') }})
    non_retryable_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonRetryableError') }})
    retryable_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RetryableError') }})
    stopped: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stopped') }})
    
