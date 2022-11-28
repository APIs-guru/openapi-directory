from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModelDefinitionModelOptions:
    r"""ModelDefinitionModelOptions
    [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query.
    """
    
    labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    loss_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lossType') }})
    model_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelType') }})
    

@dataclass_json
@dataclass
class ModelDefinition:
    model_options: Optional[ModelDefinitionModelOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelOptions') }})
    training_runs: Optional[List[BqmlTrainingRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingRuns') }})
    
