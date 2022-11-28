from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelCounters:
    r"""LabelCounters
    Provides a breakdown of the number of objects labeled.
    """
    
    failed_non_retryable_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedNonRetryableError') }})
    human_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLabeled') }})
    machine_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MachineLabeled') }})
    total_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalLabeled') }})
    unlabeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unlabeled') }})
    
