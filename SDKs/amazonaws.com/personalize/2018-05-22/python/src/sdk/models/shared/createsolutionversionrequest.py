from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSolutionVersionRequest:
    solution_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionArn') }})
    training_mode: Optional[TrainingModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingMode') }})
    
