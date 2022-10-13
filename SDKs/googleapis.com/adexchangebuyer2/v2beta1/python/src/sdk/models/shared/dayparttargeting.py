from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import daypart

class DayPartTargetingTimeZoneTypeEnum(str, Enum):
    TIME_ZONE_SOURCE_UNSPECIFIED = "TIME_ZONE_SOURCE_UNSPECIFIED"
    PUBLISHER = "PUBLISHER"
    USER = "USER"


@dataclass_json
@dataclass
class DayPartTargeting:
    day_parts: Optional[List[daypart.DayPart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayParts' }})
    time_zone_type: Optional[DayPartTargetingTimeZoneTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZoneType' }})
    
