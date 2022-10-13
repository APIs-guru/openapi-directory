from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowtarget


@dataclass_json
@dataclass
class DescribeMaintenanceWindowTargetsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    targets: Optional[List[maintenancewindowtarget.MaintenanceWindowTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
