from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemberModel:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    permission_group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionGroupId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
