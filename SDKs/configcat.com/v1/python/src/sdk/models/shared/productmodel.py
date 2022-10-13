from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import organizationmodel


@dataclass_json
@dataclass
class ProductModel:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization: Optional[organizationmodel.OrganizationModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
