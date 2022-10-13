from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class LineItemRefund:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    refund_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundDate' }})
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundId' }})
    refund_reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundReferenceId' }})
    
