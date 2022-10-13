from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import automlconfig
from . import hpoconfig
from . import optimizationobjective


@dataclass_json
@dataclass
class SolutionConfig:
    algorithm_hyper_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'algorithmHyperParameters' }})
    auto_ml_config: Optional[automlconfig.AutoMlConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoMLConfig' }})
    event_value_threshold: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventValueThreshold' }})
    feature_transformation_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featureTransformationParameters' }})
    hpo_config: Optional[hpoconfig.HpoConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hpoConfig' }})
    optimization_objective: Optional[optimizationobjective.OptimizationObjective] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optimizationObjective' }})
    
