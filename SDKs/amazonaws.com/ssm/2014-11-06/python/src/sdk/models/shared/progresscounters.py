from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProgressCounters:
    r"""ProgressCounters
    An aggregate of step execution statuses displayed in the Amazon Web Services Systems Manager console for a multi-Region and multi-account Automation execution.
    """
    
    cancelled_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CancelledSteps') }})
    failed_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedSteps') }})
    success_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuccessSteps') }})
    timed_out_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimedOutSteps') }})
    total_steps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalSteps') }})
    
