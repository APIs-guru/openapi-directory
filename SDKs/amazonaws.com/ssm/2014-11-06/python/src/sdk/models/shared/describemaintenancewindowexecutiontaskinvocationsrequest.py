from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowfilter


@dataclass_json
@dataclass
class DescribeMaintenanceWindowExecutionTaskInvocationsRequest:
    filters: Optional[List[maintenancewindowfilter.MaintenanceWindowFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    task_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaskId' }})
    window_execution_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowExecutionId' }})
    
