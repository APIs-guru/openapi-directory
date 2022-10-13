from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class Compensation:
    benefits: Optional[List[shared.Benefit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benefits' }})
    deductions: Optional[List[shared.Deduction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deductions' }})
    employee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    gross_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross_pay' }})
    net_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_pay' }})
    taxes: Optional[List[shared.Tax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    
