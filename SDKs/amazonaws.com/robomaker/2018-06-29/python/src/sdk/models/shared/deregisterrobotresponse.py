from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeregisterRobotResponse:
    fleet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleet') }})
    robot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot') }})
    
