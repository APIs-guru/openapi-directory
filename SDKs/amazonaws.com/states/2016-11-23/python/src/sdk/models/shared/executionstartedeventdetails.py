from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionStartedEventDetails:
    r"""ExecutionStartedEventDetails
    Contains details about the start of the execution.
    """
    
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_details: Optional[HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDetails') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    
