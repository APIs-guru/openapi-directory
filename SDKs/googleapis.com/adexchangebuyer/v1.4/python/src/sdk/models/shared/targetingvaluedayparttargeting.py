from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetingValueDayPartTargeting:
    day_parts: Optional[List[TargetingValueDayPartTargetingDayPart]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayParts') }})
    time_zone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZoneType') }})
    
