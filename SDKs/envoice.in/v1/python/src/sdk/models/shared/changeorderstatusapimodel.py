from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }, 'form': { 'field_name': 'Id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Reason') }, 'form': { 'field_name': 'Reason' }})
    status: Optional[ChangeOrderStatusAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    
