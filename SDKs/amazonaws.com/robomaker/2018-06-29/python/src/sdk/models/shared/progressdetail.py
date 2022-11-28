from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProgressDetail:
    r"""ProgressDetail
    Information about the progress of a deployment job.
    """
    
    current_progress: Optional[RobotDeploymentStepEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentProgress') }})
    estimated_time_remaining_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedTimeRemainingSeconds') }})
    percent_done: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentDone') }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResource') }})
    
