from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceLimits:
    r"""ResourceLimits
    Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.
    """
    
    max_number_of_training_jobs: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxNumberOfTrainingJobs') }})
    max_parallel_training_jobs: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxParallelTrainingJobs') }})
    
