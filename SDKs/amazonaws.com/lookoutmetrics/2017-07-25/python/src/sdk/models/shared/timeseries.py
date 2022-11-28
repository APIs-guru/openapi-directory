from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TimeSeries:
    r"""TimeSeries
    Details about a metric. A metric is an aggregation of the values of a measure for a dimension value, such as <i>availability</i> in the <i>us-east-1</i> Region.
    """
    
    dimension_list: List[DimensionNameValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionList') }})
    metric_value_list: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricValueList') }})
    time_series_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeSeriesId') }})
    
