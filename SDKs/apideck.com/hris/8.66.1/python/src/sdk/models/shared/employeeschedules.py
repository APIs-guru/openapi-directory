from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employee
from . import schedule


@dataclass_json
@dataclass
class EmployeeSchedules:
    employee: Optional[employee.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    schedules: Optional[List[schedule.Schedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedules' }})
    
