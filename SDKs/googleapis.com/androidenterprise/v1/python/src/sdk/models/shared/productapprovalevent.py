from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProductApprovalEventApprovedEnum(str, Enum):
    UNKNOWN = "unknown"
    APPROVED = "approved"
    UNAPPROVED = "unapproved"


@dataclass_json
@dataclass
class ProductApprovalEvent:
    approved: Optional[ProductApprovalEventApprovedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    
