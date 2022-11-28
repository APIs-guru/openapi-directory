from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FinalHyperParameterTuningJobObjectiveMetric:
    r"""FinalHyperParameterTuningJobObjectiveMetric
    Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.
    """
    
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    type: Optional[HyperParameterTuningJobObjectiveTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
