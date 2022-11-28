from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleTransferRunsResponse:
    r"""ScheduleTransferRunsResponse
    A response to schedule transfer runs for a time range.
    """
    
    runs: Optional[List[TransferRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    
