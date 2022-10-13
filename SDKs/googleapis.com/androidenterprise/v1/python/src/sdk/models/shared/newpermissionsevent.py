from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NewPermissionsEvent:
    approved_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvedPermissions' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    requested_permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedPermissions' }})
    
