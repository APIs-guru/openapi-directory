from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetTimeBasedAutoScalingRequest:
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    auto_scaling_schedule: Optional[WeeklyAutoScalingSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingSchedule') }})
    
