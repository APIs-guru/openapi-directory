from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SellingPrivileges:
    r"""SellingPrivileges
    A merchant's selling limit, and the status of their account registration.
    """
    
    seller_registration_completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerRegistrationCompleted') }})
    selling_limit: Optional[SellingLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellingLimit') }})
    
