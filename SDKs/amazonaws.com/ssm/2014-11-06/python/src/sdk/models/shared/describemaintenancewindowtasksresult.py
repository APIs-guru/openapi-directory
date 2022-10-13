from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowtask


@dataclass_json
@dataclass
class DescribeMaintenanceWindowTasksResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    tasks: Optional[List[maintenancewindowtask.MaintenanceWindowTask]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tasks' }})
    
