from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import robotdeploymentstep_enum


@dataclass_json
@dataclass
class ProgressDetail:
    current_progress: Optional[robotdeploymentstep_enum.RobotDeploymentStepEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentProgress' }})
    estimated_time_remaining_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'estimatedTimeRemainingSeconds' }})
    percent_done: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentDone' }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetResource' }})
    
