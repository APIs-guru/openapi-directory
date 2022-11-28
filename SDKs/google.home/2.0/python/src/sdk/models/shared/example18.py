from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Example18:
    alarm: List[Alarm] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarm') }})
    timer: List[Timer] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timer') }})
    
