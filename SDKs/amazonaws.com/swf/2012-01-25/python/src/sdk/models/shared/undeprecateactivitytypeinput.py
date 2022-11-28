from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UndeprecateActivityTypeInput:
    activity_type: ActivityType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
