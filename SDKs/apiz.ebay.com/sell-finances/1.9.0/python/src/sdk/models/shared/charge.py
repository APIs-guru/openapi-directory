from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class Charge:
    cancellation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellationId' }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseId' }})
    charge_net_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargeNetAmount' }})
    inquiry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inquiryId' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    payment_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDisputeId' }})
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundId' }})
    return_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnId' }})
    
