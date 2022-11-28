from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionSucceededEventDetails:
    r"""ExecutionSucceededEventDetails
    Contains details about the successful termination of the execution.
    """
    
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    
