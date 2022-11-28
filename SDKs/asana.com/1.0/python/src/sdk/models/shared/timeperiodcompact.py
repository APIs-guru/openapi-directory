from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TimePeriodCompactPeriodEnum(str, Enum):
    FY = "FY"
    H1 = "H1"
    H2 = "H2"
    Q1 = "Q1"
    Q2 = "Q2"
    Q3 = "Q3"
    Q4 = "Q4"


@dataclass_json
@dataclass
class TimePeriodCompact:
    end_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_on') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    period: Optional[TimePeriodCompactPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_on') }})
    
