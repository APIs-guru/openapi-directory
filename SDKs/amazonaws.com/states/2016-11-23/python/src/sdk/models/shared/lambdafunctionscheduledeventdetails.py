from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LambdaFunctionScheduledEventDetails:
    r"""LambdaFunctionScheduledEventDetails
    Contains details about a lambda function scheduled during an execution.
    """
    
    resource: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    input: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_details: Optional[HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDetails') }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    
