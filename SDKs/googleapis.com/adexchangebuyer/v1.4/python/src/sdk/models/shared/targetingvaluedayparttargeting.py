from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetingvaluedayparttargetingdaypart


@dataclass_json
@dataclass
class TargetingValueDayPartTargeting:
    day_parts: Optional[List[targetingvaluedayparttargetingdaypart.TargetingValueDayPartTargetingDayPart]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayParts' }})
    time_zone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZoneType' }})
    
