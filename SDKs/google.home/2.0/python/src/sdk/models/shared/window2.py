from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Window2:
    days: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    length_hours: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('length_hours') }})
    start_hour: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_hour') }})
    
