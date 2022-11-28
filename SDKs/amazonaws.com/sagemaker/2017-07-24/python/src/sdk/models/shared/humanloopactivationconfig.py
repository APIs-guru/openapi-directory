from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HumanLoopActivationConfig:
    r"""HumanLoopActivationConfig
    Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.
    """
    
    human_loop_activation_conditions_config: HumanLoopActivationConditionsConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopActivationConditionsConfig') }})
    
