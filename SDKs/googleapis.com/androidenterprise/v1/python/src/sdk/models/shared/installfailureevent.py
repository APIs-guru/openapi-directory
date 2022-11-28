from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InstallFailureEventFailureReasonEnum(str, Enum):
    UNKNOWN = "unknown"
    TIMEOUT = "timeout"


@dataclass_json
@dataclass
class InstallFailureEvent:
    r"""InstallFailureEvent
    An event generated when an app installation failed on a device
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    failure_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureDetails') }})
    failure_reason: Optional[InstallFailureEventFailureReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
