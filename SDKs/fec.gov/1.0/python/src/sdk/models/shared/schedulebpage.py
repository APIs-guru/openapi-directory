from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScheduleBPage:
    pagination: Optional[SeekInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    results: Optional[List[ScheduleB]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
