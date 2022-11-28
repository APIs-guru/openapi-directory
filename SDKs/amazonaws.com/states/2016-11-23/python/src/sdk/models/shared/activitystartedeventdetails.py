from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActivityStartedEventDetails:
    r"""ActivityStartedEventDetails
    Contains details about the start of an activity during an execution.
    """
    
    worker_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerName') }})
    
