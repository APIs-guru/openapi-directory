from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FrequencyCapTimeUnitTypeEnum(str, Enum):
    TIME_UNIT_TYPE_UNSPECIFIED = "TIME_UNIT_TYPE_UNSPECIFIED"
    MINUTE = "MINUTE"
    HOUR = "HOUR"
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"
    LIFETIME = "LIFETIME"
    POD = "POD"
    STREAM = "STREAM"


@dataclass_json
@dataclass
class FrequencyCap:
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxImpressions' }})
    num_time_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTimeUnits' }})
    time_unit_type: Optional[FrequencyCapTimeUnitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeUnitType' }})
    
