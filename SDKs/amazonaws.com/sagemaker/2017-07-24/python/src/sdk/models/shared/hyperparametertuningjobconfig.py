from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import hyperparametertuningjobobjective
from . import parameterranges
from . import resourcelimits
from . import hyperparametertuningjobstrategytype_enum
from . import trainingjobearlystoppingtype_enum
from . import tuningjobcompletioncriteria


@dataclass_json
@dataclass
class HyperParameterTuningJobConfig:
    hyper_parameter_tuning_job_objective: Optional[hyperparametertuningjobobjective.HyperParameterTuningJobObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameterTuningJobObjective' }})
    parameter_ranges: Optional[parameterranges.ParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterRanges' }})
    resource_limits: resourcelimits.ResourceLimits = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLimits' }})
    strategy: hyperparametertuningjobstrategytype_enum.HyperParameterTuningJobStrategyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Strategy' }})
    training_job_early_stopping_type: Optional[trainingjobearlystoppingtype_enum.TrainingJobEarlyStoppingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingJobEarlyStoppingType' }})
    tuning_job_completion_criteria: Optional[tuningjobcompletioncriteria.TuningJobCompletionCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TuningJobCompletionCriteria' }})
    
