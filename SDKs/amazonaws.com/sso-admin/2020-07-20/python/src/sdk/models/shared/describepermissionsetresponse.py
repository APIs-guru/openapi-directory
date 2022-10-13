from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import permissionset


@dataclass_json
@dataclass
class DescribePermissionSetResponse:
    permission_set: Optional[permissionset.PermissionSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSet' }})
    
