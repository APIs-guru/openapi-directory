from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdefinition
from . import traininginputmode_enum


@dataclass_json
@dataclass
class AlgorithmSpecification:
    algorithm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlgorithmName' }})
    enable_sage_maker_metrics_time_series: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableSageMakerMetricsTimeSeries' }})
    metric_definitions: Optional[List[metricdefinition.MetricDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricDefinitions' }})
    training_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingImage' }})
    training_input_mode: traininginputmode_enum.TrainingInputModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrainingInputMode' }})
    
