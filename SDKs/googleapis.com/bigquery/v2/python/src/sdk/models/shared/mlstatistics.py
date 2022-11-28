from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MlStatistics:
    iteration_results: Optional[List[IterationResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iterationResults') }})
    max_iterations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIterations') }})
    
