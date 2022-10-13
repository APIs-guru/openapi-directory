from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sellinglimit


@dataclass_json
@dataclass
class SellingPrivileges:
    seller_registration_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerRegistrationCompleted' }})
    selling_limit: Optional[sellinglimit.SellingLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellingLimit' }})
    
