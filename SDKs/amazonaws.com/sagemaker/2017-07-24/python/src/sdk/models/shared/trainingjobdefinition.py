from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrainingJobDefinition:
    r"""TrainingJobDefinition
    Defines the input needed to run a training job using the algorithm.
    """
    
    input_data_config: List[Channel] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputDataConfig') }})
    output_data_config: OutputDataConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputDataConfig') }})
    resource_config: ResourceConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceConfig') }})
    stopping_condition: StoppingCondition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StoppingCondition') }})
    training_input_mode: TrainingInputModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingInputMode') }})
    hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HyperParameters') }})
    
