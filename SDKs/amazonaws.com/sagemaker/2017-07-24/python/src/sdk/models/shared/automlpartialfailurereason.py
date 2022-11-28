from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AutoMlPartialFailureReason:
    r"""AutoMlPartialFailureReason
    The reason for a partial failure of an AutoML job.
    """
    
    partial_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartialFailureMessage') }})
    
