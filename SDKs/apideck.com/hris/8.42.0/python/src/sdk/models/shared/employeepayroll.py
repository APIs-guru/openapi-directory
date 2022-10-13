from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EmployeePayroll:
    employee: Optional[shared.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    payroll: Optional[shared.Payroll] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payroll' }})
    
