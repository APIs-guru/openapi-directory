from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import employee
from . import hrisjob


@dataclass_json
@dataclass
class HrisJobs:
    employee: Optional[employee.Employee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee' }})
    jobs: Optional[List[hrisjob.HrisJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    
