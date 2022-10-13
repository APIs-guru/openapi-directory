from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import parenthyperparametertuningjob
from . import hyperparametertuningjobwarmstarttype_enum


@dataclass_json
@dataclass
class HyperParameterTuningJobWarmStartConfig:
    parent_hyper_parameter_tuning_jobs: List[parenthyperparametertuningjob.ParentHyperParameterTuningJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentHyperParameterTuningJobs' }})
    warm_start_type: hyperparametertuningjobwarmstarttype_enum.HyperParameterTuningJobWarmStartTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WarmStartType' }})
    
