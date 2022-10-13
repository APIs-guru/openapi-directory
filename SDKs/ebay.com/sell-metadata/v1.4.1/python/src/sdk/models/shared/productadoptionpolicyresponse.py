from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productadoptionpolicy
from . import error


@dataclass_json
@dataclass
class ProductAdoptionPolicyResponse:
    product_adoption_policies: Optional[List[productadoptionpolicy.ProductAdoptionPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productAdoptionPolicies' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
