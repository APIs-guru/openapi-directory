from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HumanLoopActivationConditionsConfig:
    human_loop_activation_conditions: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopActivationConditions' }})
    
