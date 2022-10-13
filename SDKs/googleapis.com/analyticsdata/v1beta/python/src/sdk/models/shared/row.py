from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import metricvalue


@dataclass_json
@dataclass
class Row:
    dimension_values: Optional[List[dimensionvalue.DimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    metric_values: Optional[List[metricvalue.MetricValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValues' }})
    
