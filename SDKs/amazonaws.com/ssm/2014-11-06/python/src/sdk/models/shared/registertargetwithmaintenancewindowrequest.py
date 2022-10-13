from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import maintenancewindowresourcetype_enum
from . import target


@dataclass_json
@dataclass
class RegisterTargetWithMaintenanceWindowRequest:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerInformation' }})
    resource_type: maintenancewindowresourcetype_enum.MaintenanceWindowResourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    targets: List[target.Target] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    window_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WindowId' }})
    
