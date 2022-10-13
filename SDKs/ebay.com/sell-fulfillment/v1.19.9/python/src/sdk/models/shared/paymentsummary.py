from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import payment
from . import orderrefund
from . import amount


@dataclass_json
@dataclass
class PaymentSummary:
    payments: Optional[List[payment.Payment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    refunds: Optional[List[orderrefund.OrderRefund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    total_due_seller: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalDueSeller' }})
    
