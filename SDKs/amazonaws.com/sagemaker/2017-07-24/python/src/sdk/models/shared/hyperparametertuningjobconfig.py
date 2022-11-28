from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterTuningJobConfig:
    r"""HyperParameterTuningJobConfig
    Configures a hyperparameter tuning job.
    """
    
    resource_limits: ResourceLimits = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLimits') }})
    strategy: HyperParameterTuningJobStrategyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Strategy') }})
    hyper_parameter_tuning_job_objective: Optional[HyperParameterTuningJobObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobObjective') }})
    parameter_ranges: Optional[ParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterRanges') }})
    training_job_early_stopping_type: Optional[TrainingJobEarlyStoppingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobEarlyStoppingType') }})
    tuning_job_completion_criteria: Optional[TuningJobCompletionCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TuningJobCompletionCriteria') }})
    
