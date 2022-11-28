from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HpoResourceConfig:
    r"""HpoResourceConfig
    Describes the resource configuration for hyperparameter optimization (HPO).
    """
    
    max_number_of_training_jobs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfTrainingJobs') }})
    max_parallel_training_jobs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxParallelTrainingJobs') }})
    
