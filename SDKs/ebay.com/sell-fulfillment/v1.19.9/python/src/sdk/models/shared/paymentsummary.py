from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentSummary:
    r"""PaymentSummary
    This type contains information about the various monetary exchanges that apply to the net balance due for the order.
    """
    
    payments: Optional[List[Payment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    refunds: Optional[List[OrderRefund]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    total_due_seller: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDueSeller') }})
    
