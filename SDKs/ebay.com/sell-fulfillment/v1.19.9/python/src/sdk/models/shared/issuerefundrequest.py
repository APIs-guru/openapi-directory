from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simpleamount
from . import refunditem


@dataclass_json
@dataclass
class IssueRefundRequest:
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    order_level_refund_amount: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderLevelRefundAmount' }})
    reason_for_refund: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reasonForRefund' }})
    refund_items: Optional[List[refunditem.RefundItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundItems' }})
    
