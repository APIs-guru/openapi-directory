from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DayPartTargetingTimeZoneTypeEnum(str, Enum):
    TIME_ZONE_TYPE_UNSPECIFIED = "TIME_ZONE_TYPE_UNSPECIFIED"
    SELLER = "SELLER"
    USER = "USER"


@dataclass_json
@dataclass
class DayPartTargeting:
    r"""DayPartTargeting
    Represents Daypart targeting.
    """
    
    day_parts: Optional[List[DayPart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayParts') }})
    time_zone_type: Optional[DayPartTargetingTimeZoneTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZoneType') }})
    
