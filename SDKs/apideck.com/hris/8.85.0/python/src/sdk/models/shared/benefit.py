from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Benefit:
    employee_deduction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_deduction') }})
    employer_contribution: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employer_contribution') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
