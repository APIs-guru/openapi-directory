from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeviceStateAccountStateEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class DeviceState:
    r"""DeviceState
    The state of a user's device, as accessed by the getState and setState methods on device resources.
    """
    
    account_state: Optional[DeviceStateAccountStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountState') }})
    
