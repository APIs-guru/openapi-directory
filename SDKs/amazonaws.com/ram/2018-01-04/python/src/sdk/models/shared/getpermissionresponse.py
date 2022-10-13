from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import resourcesharepermissiondetail


@dataclass_json
@dataclass
class GetPermissionResponse:
    permission: Optional[resourcesharepermissiondetail.ResourceSharePermissionDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    
