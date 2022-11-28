from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Compensation:
    employee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    benefits: Optional[List[Benefit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benefits') }})
    deductions: Optional[List[Deduction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deductions') }})
    gross_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gross_pay') }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('net_pay') }})
    taxes: Optional[List[Tax]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    
