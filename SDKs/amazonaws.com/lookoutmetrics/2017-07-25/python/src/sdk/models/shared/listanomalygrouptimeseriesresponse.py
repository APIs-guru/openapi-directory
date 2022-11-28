from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAnomalyGroupTimeSeriesResponse:
    anomaly_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AnomalyGroupId') }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    time_series_list: Optional[List[TimeSeries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSeriesList') }})
    timestamp_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimestampList') }})
    
