from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActivityTaskStatus:
    r"""ActivityTaskStatus
    Status information about an activity task.
    """
    
    cancel_requested: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelRequested') }})
    
