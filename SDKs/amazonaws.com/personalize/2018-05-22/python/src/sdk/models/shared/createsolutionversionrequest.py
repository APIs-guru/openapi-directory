from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import trainingmode_enum


@dataclass_json
@dataclass
class CreateSolutionVersionRequest:
    solution_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solutionArn' }})
    training_mode: Optional[trainingmode_enum.TrainingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingMode' }})
    
