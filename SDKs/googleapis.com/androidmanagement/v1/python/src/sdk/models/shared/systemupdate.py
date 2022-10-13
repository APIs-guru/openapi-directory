from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import freezeperiod

class SystemUpdateTypeEnum(str, Enum):
    SYSTEM_UPDATE_TYPE_UNSPECIFIED = "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    WINDOWED = "WINDOWED"
    POSTPONE = "POSTPONE"


@dataclass_json
@dataclass
class SystemUpdate:
    end_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endMinutes' }})
    freeze_periods: Optional[List[freezeperiod.FreezePeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freezePeriods' }})
    start_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startMinutes' }})
    type: Optional[SystemUpdateTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
