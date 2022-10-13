from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EmployeePayrolls:
    employee: Optional[shared.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    payrolls: Optional[List[shared.Payroll]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payrolls' }})
    
