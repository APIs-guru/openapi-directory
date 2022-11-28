from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DimensionalityReductionMetrics:
    r"""DimensionalityReductionMetrics
    Model evaluation metrics for dimensionality reduction models.
    """
    
    total_explained_variance_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalExplainedVarianceRatio') }})
    
