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
    Message contains details about publisher-set frequency caps of the delivery.
    """
    
    max_impressions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxImpressions') }})
    time_unit_type: Optional[FrequencyCapTimeUnitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitType') }})
    time_units_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeUnitsCount') }})
    
