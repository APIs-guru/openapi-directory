from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RunRealtimeReportRequestMetricAggregationsEnum(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class RunRealtimeReportRequest:
    r"""RunRealtimeReportRequest
    The request to generate a realtime report.
    """
    
    dimension_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    metric_aggregations: Optional[List[RunRealtimeReportRequestMetricAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricAggregations') }})
    metric_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    minute_ranges: Optional[List[MinuteRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minuteRanges') }})
    order_bys: Optional[List[OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBys') }})
    return_property_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPropertyQuota') }})
    
