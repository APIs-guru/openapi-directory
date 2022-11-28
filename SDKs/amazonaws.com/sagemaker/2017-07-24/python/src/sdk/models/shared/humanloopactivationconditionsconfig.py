from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HumanLoopActivationConditionsConfig:
    r"""HumanLoopActivationConditionsConfig
    Defines under what conditions SageMaker creates a human loop. Used within . See for the required format of activation conditions.
    """
    
    human_loop_activation_conditions: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationConditions') }})
    
