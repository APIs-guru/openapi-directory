from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegressionMetrics:
    mean_absolute_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanAbsoluteError' }})
    mean_squared_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanSquaredError' }})
    mean_squared_log_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meanSquaredLogError' }})
    median_absolute_error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medianAbsoluteError' }})
    r_squared: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rSquared' }})
    
