from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import channel
from . import outputdataconfig
from . import resourceconfig
from . import stoppingcondition
from . import traininginputmode_enum


@dataclass_json
@dataclass
class TrainingJobDefinition:
    hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HyperParameters' }})
    input_data_config: List[channel.Channel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputDataConfig' }})
    output_data_config: outputdataconfig.OutputDataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputDataConfig' }})
    resource_config: resourceconfig.ResourceConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceConfig' }})
    stopping_condition: stoppingcondition.StoppingCondition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppingCondition' }})
    training_input_mode: traininginputmode_enum.TrainingInputModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingInputMode' }})
    
