from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import legacyreference
from . import simpleamount


@dataclass_json
@dataclass
class RefundItem:
    legacy_reference: Optional[legacyreference.LegacyReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyReference' }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItemId' }})
    refund_amount: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundAmount' }})
    
