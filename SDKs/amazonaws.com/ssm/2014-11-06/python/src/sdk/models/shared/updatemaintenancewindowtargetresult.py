from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class UpdateMaintenanceWindowTargetResult:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerInformation' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    window_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    window_target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTargetId' }})
    
