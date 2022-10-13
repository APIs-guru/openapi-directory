from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import humanloopactivationconditionsconfig


@dataclass_json
@dataclass
class HumanLoopActivationConfig:
    human_loop_activation_conditions_config: humanloopactivationconditionsconfig.HumanLoopActivationConditionsConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationConditionsConfig' }})
    
