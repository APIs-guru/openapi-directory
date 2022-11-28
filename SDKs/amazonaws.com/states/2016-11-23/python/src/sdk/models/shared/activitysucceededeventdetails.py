from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivitySucceededEventDetails:
    r"""ActivitySucceededEventDetails
    Contains details about an activity that successfully terminated during an execution.
    """
    
    output: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[HistoryEventExecutionDataDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    
