from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import paymenthold


@dataclass_json
@dataclass
class Payment:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDate' }})
    payment_holds: Optional[List[paymenthold.PaymentHold]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentHolds' }})
    payment_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethod' }})
    payment_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentReferenceId' }})
    payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentStatus' }})
    
