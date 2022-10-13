from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeperiodcompact

class TimePeriodResponsePeriodEnum(str, Enum):
    FY = "FY"
    H1 = "H1"
    H2 = "H2"
    Q1 = "Q1"
    Q2 = "Q2"
    Q3 = "Q3"
    Q4 = "Q4"


@dataclass_json
@dataclass
class TimePeriodResponse:
    end_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_on' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    parent: Optional[timeperiodcompact.TimePeriodCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    period: Optional[TimePeriodResponsePeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    start_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_on' }})
    
