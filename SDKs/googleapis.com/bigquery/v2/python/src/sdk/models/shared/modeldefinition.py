from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bqmltrainingrun


@dataclass_json
@dataclass
class ModelDefinitionModelOptions:
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    loss_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lossType' }})
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelType' }})
    

@dataclass_json
@dataclass
class ModelDefinition:
    model_options: Optional[ModelDefinitionModelOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelOptions' }})
    training_runs: Optional[List[bqmltrainingrun.BqmlTrainingRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingRuns' }})
    
