from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Benefit:
    employee_deduction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_deduction' }})
    employer_contribution: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employer_contribution' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
