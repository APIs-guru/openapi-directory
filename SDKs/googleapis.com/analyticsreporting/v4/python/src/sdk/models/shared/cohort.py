from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import daterange

class CohortTypeEnum(str, Enum):
    UNSPECIFIED_COHORT_TYPE = "UNSPECIFIED_COHORT_TYPE"
    FIRST_VISIT_DATE = "FIRST_VISIT_DATE"


@dataclass_json
@dataclass
class Cohort:
    date_range: Optional[daterange.DateRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRange' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[CohortTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
