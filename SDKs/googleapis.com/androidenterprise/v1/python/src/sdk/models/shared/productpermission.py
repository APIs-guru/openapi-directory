from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProductPermissionStateEnum(str, Enum):
    REQUIRED = "required"
    ACCEPTED = "accepted"


@dataclass_json
@dataclass
class ProductPermission:
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionId' }})
    state: Optional[ProductPermissionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
