from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateHyperParameterTuningJobRequest:
    hyper_parameter_tuning_job_config: HyperParameterTuningJobConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobConfig') }})
    hyper_parameter_tuning_job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameterTuningJobName') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    training_job_definition: Optional[HyperParameterTrainingJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobDefinition') }})
    training_job_definitions: Optional[List[HyperParameterTrainingJobDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingJobDefinitions') }})
    warm_start_config: Optional[HyperParameterTuningJobWarmStartConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WarmStartConfig') }})
    
