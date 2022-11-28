from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EmployeeSchedules:
    employee: Optional[Employee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee') }})
    schedules: Optional[List[Schedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedules') }})
    
