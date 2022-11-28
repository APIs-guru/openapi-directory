from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Settings1:
    control_notifications: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('control_notifications') }})
    
