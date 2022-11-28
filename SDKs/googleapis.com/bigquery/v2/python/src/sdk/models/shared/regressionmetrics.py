from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegressionMetrics:
    r"""RegressionMetrics
    Evaluation metrics for regression and explicit feedback type matrix factorization models.
    """
    
    mean_absolute_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanAbsoluteError') }})
    mean_squared_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanSquaredError') }})
    mean_squared_log_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanSquaredLogError') }})
    median_absolute_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medianAbsoluteError') }})
    r_squared: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rSquared') }})
    
