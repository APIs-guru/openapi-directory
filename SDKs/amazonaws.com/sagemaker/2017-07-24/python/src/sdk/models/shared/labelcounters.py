from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LabelCounters:
    failed_non_retryable_error: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedNonRetryableError' }})
    human_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLabeled' }})
    machine_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MachineLabeled' }})
    total_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalLabeled' }})
    unlabeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unlabeled' }})
    
