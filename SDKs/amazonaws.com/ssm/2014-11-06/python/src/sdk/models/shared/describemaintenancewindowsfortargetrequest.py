from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowresourcetype_enum
from . import target


@dataclass_json
@dataclass
class DescribeMaintenanceWindowsForTargetRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_type: maintenancewindowresourcetype_enum.MaintenanceWindowResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    targets: List[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    
