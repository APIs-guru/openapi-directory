from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StateExitedEventDetails:
    r"""StateExitedEventDetails
    Contains details about an exit from a state during an execution.
    """
    
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    
