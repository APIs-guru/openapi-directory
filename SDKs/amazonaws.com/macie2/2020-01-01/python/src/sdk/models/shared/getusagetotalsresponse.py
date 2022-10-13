from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timerange_enum
from . import usagetotal


@dataclass_json
@dataclass
class GetUsageTotalsResponse:
    time_range: Optional[timerange_enum.TimeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    usage_totals: Optional[List[usagetotal.UsageTotal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usageTotals' }})
    
