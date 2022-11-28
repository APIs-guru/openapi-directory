from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeleteDevicePositionHistoryError:
    r"""BatchDeleteDevicePositionHistoryError
    Contains the tracker resource details.
    """
    
    device_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    error: BatchItemError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    
