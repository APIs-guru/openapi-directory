from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RefundItem:
    r"""RefundItem
    This type is used if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the orderLevelRefundAmount container to specify the amount of the refund for the entire order.
    """
    
    legacy_reference: Optional[LegacyReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyReference') }})
    line_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    refund_amount: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundAmount') }})
    
