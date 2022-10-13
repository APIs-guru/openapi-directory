from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegressionEvaluationMetrics:
    mean_absolute_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAbsoluteError' }})
    mean_absolute_percentage_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAbsolutePercentageError' }})
    r_squared: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rSquared' }})
    root_mean_squared_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootMeanSquaredError' }})
    root_mean_squared_log_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootMeanSquaredLogError' }})
    
