from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserEq:
    high_shelf: HighShelf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('high_shelf') }})
    low_shelf: LowShelf = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_shelf') }})
    max_peaking_eqs: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_peaking_eqs') }})
    peaking_eqs: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('peaking_eqs') }})
    
