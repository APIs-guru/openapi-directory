from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SolutionConfig:
    r"""SolutionConfig
    Describes the configuration properties for the solution.
    """
    
    algorithm_hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithmHyperParameters') }})
    auto_ml_config: Optional[AutoMlConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoMLConfig') }})
    event_value_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventValueThreshold') }})
    feature_transformation_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featureTransformationParameters') }})
    hpo_config: Optional[HpoConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hpoConfig') }})
    optimization_objective: Optional[OptimizationObjective] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizationObjective') }})
    
