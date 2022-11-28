from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectiveStatusCounters:
    r"""ObjectiveStatusCounters
    Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
    """
    
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Failed') }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pending') }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Succeeded') }})
    
