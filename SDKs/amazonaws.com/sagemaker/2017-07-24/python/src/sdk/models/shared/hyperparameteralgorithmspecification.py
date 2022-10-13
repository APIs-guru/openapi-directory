from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdefinition
from . import traininginputmode_enum


@dataclass_json
@dataclass
class HyperParameterAlgorithmSpecification:
    algorithm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmName' }})
    metric_definitions: Optional[List[metricdefinition.MetricDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricDefinitions' }})
    training_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingImage' }})
    training_input_mode: traininginputmode_enum.TrainingInputModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingInputMode' }})
    
