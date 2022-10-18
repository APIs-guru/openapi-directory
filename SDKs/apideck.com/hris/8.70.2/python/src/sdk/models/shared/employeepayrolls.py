from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employee
from . import payroll


@dataclass_json
@dataclass
class EmployeePayrolls:
    employee: Optional[employee.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    payrolls: Optional[List[payroll.Payroll]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payrolls' }})
    
