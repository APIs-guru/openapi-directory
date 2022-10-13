from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EntitlementReasonEnum(str, Enum):
    FREE = "free"
    GROUP_LICENSE = "groupLicense"
    USER_PURCHASE = "userPurchase"


@dataclass_json
@dataclass
class Entitlement:
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    reason: Optional[EntitlementReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
