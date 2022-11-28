from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HpoConfig:
    r"""HpoConfig
    Describes the properties for hyperparameter optimization (HPO).
    """
    
    algorithm_hyper_parameter_ranges: Optional[HyperParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithmHyperParameterRanges') }})
    hpo_objective: Optional[HpoObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpoObjective') }})
    hpo_resource_config: Optional[HpoResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpoResourceConfig') }})
    
