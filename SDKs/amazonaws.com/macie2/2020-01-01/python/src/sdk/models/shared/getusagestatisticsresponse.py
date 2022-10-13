from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import usagerecord
from . import timerange_enum


@dataclass_json
@dataclass
class GetUsageStatisticsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    records: Optional[List[usagerecord.UsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    time_range: Optional[timerange_enum.TimeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
