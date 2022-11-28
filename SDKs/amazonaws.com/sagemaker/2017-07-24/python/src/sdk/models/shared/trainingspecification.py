from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrainingSpecification:
    r"""TrainingSpecification
    Defines how the algorithm is used for a training job.
    """
    
    supported_training_instance_types: List[TrainingInstanceTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedTrainingInstanceTypes') }})
    training_channels: List[ChannelSpecification] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingChannels') }})
    training_image: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingImage') }})
    metric_definitions: Optional[List[MetricDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricDefinitions') }})
    supported_hyper_parameters: Optional[List[HyperParameterSpecification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedHyperParameters') }})
    supported_tuning_job_objective_metrics: Optional[List[HyperParameterTuningJobObjective]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedTuningJobObjectiveMetrics') }})
    supports_distributed_training: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportsDistributedTraining') }})
    training_image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingImageDigest') }})
    
