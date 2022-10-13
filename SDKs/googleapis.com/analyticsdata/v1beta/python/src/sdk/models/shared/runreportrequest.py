from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cohortspec
from . import daterange
from . import filterexpression
from . import dimension
from . import filterexpression
from . import metric
from . import orderby

class RunReportRequestMetricAggregationsEnum(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class RunReportRequest:
    cohort_spec: Optional[cohortspec.CohortSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cohortSpec' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    date_ranges: Optional[List[daterange.DateRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRanges' }})
    dimension_filter: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    keep_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepEmptyRows' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    metric_aggregations: Optional[List[RunReportRequestMetricAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricAggregations' }})
    metric_filter: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilter' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_bys: Optional[List[orderby.OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBys' }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'property' }})
    return_property_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPropertyQuota' }})
    
