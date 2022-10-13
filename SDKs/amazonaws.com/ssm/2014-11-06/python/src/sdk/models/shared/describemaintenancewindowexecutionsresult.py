from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowexecution


@dataclass_json
@dataclass
class DescribeMaintenanceWindowExecutionsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    window_executions: Optional[List[maintenancewindowexecution.MaintenanceWindowExecution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutions' }})
    
