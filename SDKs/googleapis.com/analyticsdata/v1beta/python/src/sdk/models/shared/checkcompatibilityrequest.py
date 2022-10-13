from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import filterexpression
from . import dimension
from . import filterexpression
from . import metric

class CheckCompatibilityRequestCompatibilityFilterEnum(str, Enum):
    COMPATIBILITY_UNSPECIFIED = "COMPATIBILITY_UNSPECIFIED"
    COMPATIBLE = "COMPATIBLE"
    INCOMPATIBLE = "INCOMPATIBLE"


@dataclass_json
@dataclass
class CheckCompatibilityRequest:
    compatibility_filter: Optional[CheckCompatibilityRequestCompatibilityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compatibilityFilter' }})
    dimension_filter: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    metric_filter: Optional[filterexpression.FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilter' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    
