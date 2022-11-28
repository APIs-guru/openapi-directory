from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ParentHyperParameterTuningJob:
    r"""ParentHyperParameterTuningJob
    A previously completed or stopped hyperparameter tuning job to be used as a starting point for a new hyperparameter tuning job.
    """
    
    hyper_parameter_tuning_job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobName') }})
    
