from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArimaFittingMetrics:
    r"""ArimaFittingMetrics
    ARIMA model fitting metrics.
    """
    
    aic: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aic') }})
    log_likelihood: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLikelihood') }})
    variance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variance') }})
    
