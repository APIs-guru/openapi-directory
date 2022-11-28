from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MaintenanceWindowFilter:
    r"""MaintenanceWindowFilter
    <p>Filter used in the request. Supported filter keys depend on the API operation that includes the filter. API operations that use <code>MaintenanceWindowFilter&gt;</code> include the following:</p> <ul> <li> <p> <a>DescribeMaintenanceWindowExecutions</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTaskInvocations</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowExecutionTasks</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindows</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTargets</a> </p> </li> <li> <p> <a>DescribeMaintenanceWindowTasks</a> </p> </li> </ul>
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
