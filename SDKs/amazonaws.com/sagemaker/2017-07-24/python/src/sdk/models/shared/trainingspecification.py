from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdefinition
from . import hyperparameterspecification
from . import traininginstancetype_enum
from . import hyperparametertuningjobobjective
from . import channelspecification


@dataclass_json
@dataclass
class TrainingSpecification:
    metric_definitions: Optional[List[metricdefinition.MetricDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricDefinitions' }})
    supported_hyper_parameters: Optional[List[hyperparameterspecification.HyperParameterSpecification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedHyperParameters' }})
    supported_training_instance_types: List[traininginstancetype_enum.TrainingInstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedTrainingInstanceTypes' }})
    supported_tuning_job_objective_metrics: Optional[List[hyperparametertuningjobobjective.HyperParameterTuningJobObjective]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedTuningJobObjectiveMetrics' }})
    supports_distributed_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsDistributedTraining' }})
    training_channels: List[channelspecification.ChannelSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingChannels' }})
    training_image: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingImage' }})
    training_image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingImageDigest' }})
    
