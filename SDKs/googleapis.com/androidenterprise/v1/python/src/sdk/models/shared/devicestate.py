from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceStateAccountStateEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class DeviceState:
    account_state: Optional[DeviceStateAccountStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountState' }})
    
