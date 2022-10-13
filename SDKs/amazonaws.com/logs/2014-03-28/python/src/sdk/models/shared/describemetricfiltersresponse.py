from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricfilter


@dataclass_json
@dataclass
class DescribeMetricFiltersResponse:
    metric_filters: Optional[List[metricfilter.MetricFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilters' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
