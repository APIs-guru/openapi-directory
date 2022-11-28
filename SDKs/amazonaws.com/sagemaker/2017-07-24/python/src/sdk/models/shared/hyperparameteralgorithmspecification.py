from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HyperParameterAlgorithmSpecification:
    r"""HyperParameterAlgorithmSpecification
    Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
    """
    
    training_input_mode: TrainingInputModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingInputMode') }})
    algorithm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlgorithmName') }})
    metric_definitions: Optional[List[MetricDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricDefinitions') }})
    training_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingImage') }})
    
