from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowidentityfortarget


@dataclass_json
@dataclass
class DescribeMaintenanceWindowsForTargetResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    window_identities: Optional[List[maintenancewindowidentityfortarget.MaintenanceWindowIdentityForTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowIdentities' }})
    
