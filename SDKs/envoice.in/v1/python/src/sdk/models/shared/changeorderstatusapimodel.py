from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChangeOrderStatusAPIModelStatusEnum(str, Enum):
    PENDING_PAYMENT = "PendingPayment"
    PROCESSING = "Processing"
    SHIPPED = "Shipped"
    COMPLETED = "Completed"
    ON_HOLD = "OnHold"
    CANCELLED = "Cancelled"
    REFUNDED = "Refunded"
    FAILED = "Failed"


@dataclass_json
@dataclass
class ChangeOrderStatusAPIModel:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Reason' }, 'form': { 'field_name': 'Reason' }})
    status: Optional[ChangeOrderStatusAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }, 'form': { 'field_name': 'Status' }})
    
