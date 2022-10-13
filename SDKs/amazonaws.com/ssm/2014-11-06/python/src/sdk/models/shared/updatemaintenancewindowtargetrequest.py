from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import target


@dataclass_json
@dataclass
class UpdateMaintenanceWindowTargetRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerInformation' }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replace' }})
    targets: Optional[List[target.Target]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    window_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    window_target_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowTargetId' }})
    
