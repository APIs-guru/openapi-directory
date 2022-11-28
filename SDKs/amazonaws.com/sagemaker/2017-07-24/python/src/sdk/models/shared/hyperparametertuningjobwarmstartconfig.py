from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterTuningJobWarmStartConfig:
    r"""HyperParameterTuningJobWarmStartConfig
    <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
    """
    
    parent_hyper_parameter_tuning_jobs: List[ParentHyperParameterTuningJob] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParentHyperParameterTuningJobs') }})
    warm_start_type: HyperParameterTuningJobWarmStartTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WarmStartType') }})
    
