from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecutionAbortedEventDetails:
    r"""ExecutionAbortedEventDetails
    Contains details about an abort of an execution.
    """
    
    cause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cause') }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    
