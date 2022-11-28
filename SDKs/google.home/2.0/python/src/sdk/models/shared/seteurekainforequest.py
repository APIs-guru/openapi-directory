from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SetEurekaInfoRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    opt_in: OptIn1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_in') }})
    settings: Settings1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
