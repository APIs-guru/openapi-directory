from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import hyperparameterranges
from . import hpoobjective
from . import hporesourceconfig


@dataclass_json
@dataclass
class HpoConfig:
    algorithm_hyper_parameter_ranges: Optional[hyperparameterranges.HyperParameterRanges] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithmHyperParameterRanges' }})
    hpo_objective: Optional[hpoobjective.HpoObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hpoObjective' }})
    hpo_resource_config: Optional[hporesourceconfig.HpoResourceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hpoResourceConfig' }})
    
