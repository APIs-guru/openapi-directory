from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotifyWorkersFailureStatus:
    r"""NotifyWorkersFailureStatus
     When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. 
    """
    
    notify_workers_failure_code: Optional[NotifyWorkersFailureCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyWorkersFailureCode') }})
    notify_workers_failure_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotifyWorkersFailureMessage') }})
    worker_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkerId') }})
    
