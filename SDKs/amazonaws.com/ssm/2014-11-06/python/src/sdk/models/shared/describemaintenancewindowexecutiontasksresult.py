from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowexecutiontaskidentity


@dataclass_json
@dataclass
class DescribeMaintenanceWindowExecutionTasksResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    window_execution_task_identities: Optional[List[maintenancewindowexecutiontaskidentity.MaintenanceWindowExecutionTaskIdentity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionTaskIdentities' }})
    
