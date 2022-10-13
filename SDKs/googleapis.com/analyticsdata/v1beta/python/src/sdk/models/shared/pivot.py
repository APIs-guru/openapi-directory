from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import orderby

class PivotMetricAggregationsEnum(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class Pivot:
    field_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldNames' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    metric_aggregations: Optional[List[PivotMetricAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricAggregations' }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_bys: Optional[List[orderby.OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBys' }})
    
