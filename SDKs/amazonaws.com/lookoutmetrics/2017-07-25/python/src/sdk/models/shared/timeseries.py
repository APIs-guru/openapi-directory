from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import dimensionnamevalue


@dataclass_json
@dataclass
class TimeSeries:
    dimension_list: List[dimensionnamevalue.DimensionNameValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DimensionList' }})
    metric_value_list: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricValueList' }})
    time_series_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeSeriesId' }})
    
