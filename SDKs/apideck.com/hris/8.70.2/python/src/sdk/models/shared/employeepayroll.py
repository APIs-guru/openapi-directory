from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import employee
from . import payroll


@dataclass_json
@dataclass
class EmployeePayroll:
    employee: Optional[employee.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    payroll: Optional[payroll.Payroll] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payroll' }})
    
