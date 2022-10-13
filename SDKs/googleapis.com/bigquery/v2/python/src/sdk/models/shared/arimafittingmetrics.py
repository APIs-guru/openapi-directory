from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ArimaFittingMetrics:
    aic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aic' }})
    log_likelihood: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLikelihood' }})
    variance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variance' }})
    
