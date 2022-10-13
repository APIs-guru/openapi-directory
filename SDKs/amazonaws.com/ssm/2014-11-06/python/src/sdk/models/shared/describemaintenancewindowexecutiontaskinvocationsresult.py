from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowexecutiontaskinvocationidentity


@dataclass_json
@dataclass
class DescribeMaintenanceWindowExecutionTaskInvocationsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    window_execution_task_invocation_identities: Optional[List[maintenancewindowexecutiontaskinvocationidentity.MaintenanceWindowExecutionTaskInvocationIdentity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionTaskInvocationIdentities' }})
    
