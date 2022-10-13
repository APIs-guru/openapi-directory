from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertuningjobconfig
from . import tag
from . import hyperparametertrainingjobdefinition
from . import hyperparametertrainingjobdefinition
from . import hyperparametertuningjobwarmstartconfig


@dataclass_json
@dataclass
class CreateHyperParameterTuningJobRequest:
    hyper_parameter_tuning_job_config: hyperparametertuningjobconfig.HyperParameterTuningJobConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobConfig' }})
    hyper_parameter_tuning_job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    training_job_definition: Optional[hyperparametertrainingjobdefinition.HyperParameterTrainingJobDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobDefinition' }})
    training_job_definitions: Optional[List[hyperparametertrainingjobdefinition.HyperParameterTrainingJobDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobDefinitions' }})
    warm_start_config: Optional[hyperparametertuningjobwarmstartconfig.HyperParameterTuningJobWarmStartConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WarmStartConfig' }})
    
