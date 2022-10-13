from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowresourcetype_enum
from . import target


@dataclass_json
@dataclass
class MaintenanceWindowTarget:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerInformation' }})
    resource_type: Optional[maintenancewindowresourcetype_enum.MaintenanceWindowResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    window_target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTargetId' }})
    
