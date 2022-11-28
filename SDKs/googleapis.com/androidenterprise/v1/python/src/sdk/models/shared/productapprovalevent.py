from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProductApprovalEventApprovedEnum(str, Enum):
    UNKNOWN = "unknown"
    APPROVED = "approved"
    UNAPPROVED = "unapproved"


@dataclass_json
@dataclass
class ProductApprovalEvent:
    r"""ProductApprovalEvent
    An event generated when a product's approval status is changed.
    """
    
    approved: Optional[ProductApprovalEventApprovedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
