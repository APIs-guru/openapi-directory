from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PowerManagementEventEventTypeEnum(str, Enum):
    POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED = "POWER_MANAGEMENT_EVENT_TYPE_UNSPECIFIED"
    BATTERY_LEVEL_COLLECTED = "BATTERY_LEVEL_COLLECTED"
    POWER_CONNECTED = "POWER_CONNECTED"
    POWER_DISCONNECTED = "POWER_DISCONNECTED"
    BATTERY_LOW = "BATTERY_LOW"
    BATTERY_OKAY = "BATTERY_OKAY"
    BOOT_COMPLETED = "BOOT_COMPLETED"
    SHUTDOWN = "SHUTDOWN"


@dataclass_json
@dataclass
class PowerManagementEvent:
    r"""PowerManagementEvent
    A power management event.
    """
    
    battery_level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batteryLevel') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    event_type: Optional[PowerManagementEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    
