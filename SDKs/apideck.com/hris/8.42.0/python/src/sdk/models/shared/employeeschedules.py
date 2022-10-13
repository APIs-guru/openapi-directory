from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class EmployeeSchedules:
    employee: Optional[shared.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    schedules: Optional[List[shared.Schedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedules' }})
    
