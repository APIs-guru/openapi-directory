from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filterexpression
from . import dimension
from . import filterexpression
from . import metric
from . import minuterange
from . import orderby

class RunRealtimeReportRequestMetricAggregationsEnum(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class RunRealtimeReportRequest:
    dimension_filter: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    metric_aggregations: Optional[List[RunRealtimeReportRequestMetricAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricAggregations' }})
    metric_filter: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilter' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    minute_ranges: Optional[List[minuterange.MinuteRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minuteRanges' }})
    order_bys: Optional[List[orderby.OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBys' }})
    return_property_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPropertyQuota' }})
    
