from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowidentity


@dataclass_json
@dataclass
class DescribeMaintenanceWindowsResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    window_identities: Optional[List[maintenancewindowidentity.MaintenanceWindowIdentity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowIdentities' }})
    
