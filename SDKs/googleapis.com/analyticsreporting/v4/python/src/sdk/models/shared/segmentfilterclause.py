from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentFilterClause:
    r"""SegmentFilterClause
    Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.
    """
    
    dimension_filter: Optional[SegmentDimensionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    metric_filter: Optional[SegmentMetricFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    not_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('not') }})
    
