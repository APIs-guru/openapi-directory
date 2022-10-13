from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productpermission


@dataclass_json
@dataclass
class ProductPermissions:
    permission: Optional[List[productpermission.ProductPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
