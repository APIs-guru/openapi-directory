from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensionorderby
from . import metricorderby
from . import pivotorderby


@dataclass_json
@dataclass
class OrderBy:
    desc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    dimension: Optional[dimensionorderby.DimensionOrderBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    metric: Optional[metricorderby.MetricOrderBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    pivot: Optional[pivotorderby.PivotOrderBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivot' }})
    
