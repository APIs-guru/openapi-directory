from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogDeliveryDescription:
    r"""LogDeliveryDescription
    The description of the log delivery settings.
    """
    
    worker_log_delivery: Optional[WorkerLogDeliveryDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerLogDelivery') }})
    
