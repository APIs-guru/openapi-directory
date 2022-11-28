from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductAdoptionPolicyResponse:
    r"""ProductAdoptionPolicyResponse
    This is the response object returned by a call to getProductAdoptionPolicies.
    """
    
    product_adoption_policies: Optional[List[ProductAdoptionPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productAdoptionPolicies') }})
    warnings: Optional[List[Error]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
