from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import attackstatisticsdataitem
from . import timerange


@dataclass_json
@dataclass
class DescribeAttackStatisticsResponse:
    data_items: List[attackstatisticsdataitem.AttackStatisticsDataItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataItems' }})
    time_range: timerange.TimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeRange' }})
    
