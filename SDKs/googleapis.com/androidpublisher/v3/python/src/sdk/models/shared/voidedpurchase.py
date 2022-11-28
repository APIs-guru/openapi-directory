from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VoidedPurchase:
    r"""VoidedPurchase
    A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    purchase_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseTimeMillis') }})
    purchase_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseToken') }})
    voided_reason: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voidedReason') }})
    voided_source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voidedSource') }})
    voided_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voidedTimeMillis') }})
    
