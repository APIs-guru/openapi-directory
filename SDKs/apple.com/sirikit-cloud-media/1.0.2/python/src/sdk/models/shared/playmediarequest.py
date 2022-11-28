from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayMediaRequest:
    constraints: Constraints = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    user_activity: UserActivity = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userActivity') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
