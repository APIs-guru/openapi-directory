from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""FrequencyCap
    Frequency cap.
    """
    
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImpressions') }})
    num_time_units: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numTimeUnits') }})
    time_unit_type: Optional[FrequencyCapTimeUnitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitType') }})
    
