from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import trainingdata
from . import trainingdata
from . import validationdata


@dataclass_json
@dataclass
class TrainingDataResult:
    input: Optional[trainingdata.TrainingData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Input' }})
    output: Optional[trainingdata.TrainingData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Output' }})
    validation: Optional[validationdata.ValidationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validation' }})
    
