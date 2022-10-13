from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DimensionalityReductionMetrics:
    total_explained_variance_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalExplainedVarianceRatio' }})
    
