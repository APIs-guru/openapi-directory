from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PivotMetricAggregationsEnum(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class Pivot:
    r"""Pivot
    Describes the visible dimension columns and rows in the report response.
    """
    
    field_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldNames') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    metric_aggregations: Optional[List[PivotMetricAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricAggregations') }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_bys: Optional[List[OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBys') }})
    
