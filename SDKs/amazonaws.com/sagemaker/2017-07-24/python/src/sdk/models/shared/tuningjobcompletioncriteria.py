from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TuningJobCompletionCriteria:
    r"""TuningJobCompletionCriteria
    The job completion criteria.
    """
    
    target_objective_metric_value: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetObjectiveMetricValue') }})
    
