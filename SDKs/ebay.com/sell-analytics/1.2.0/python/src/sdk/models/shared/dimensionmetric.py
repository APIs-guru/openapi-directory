from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import metric


@dataclass_json
@dataclass
class DimensionMetric:
    dimension: Optional[dimension.Dimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
