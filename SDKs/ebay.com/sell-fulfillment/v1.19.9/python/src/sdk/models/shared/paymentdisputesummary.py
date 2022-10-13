from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import simpleamount


@dataclass_json
@dataclass
class PaymentDisputeSummary:
    amount: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    buyer_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerUsername' }})
    closed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedDate' }})
    open_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDate' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    payment_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDisputeId' }})
    payment_dispute_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDisputeStatus' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondByDate' }})
    
