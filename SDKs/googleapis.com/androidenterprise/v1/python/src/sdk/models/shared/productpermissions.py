from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductPermissions:
    r"""ProductPermissions
    Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
    """
    
    permission: Optional[List[ProductPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
