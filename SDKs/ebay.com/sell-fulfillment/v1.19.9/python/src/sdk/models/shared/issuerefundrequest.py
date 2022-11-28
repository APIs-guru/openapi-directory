from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IssueRefundRequest:
    r"""IssueRefundRequest
    The base type used by the request payload of the issueRefund method.
    """
    
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    order_level_refund_amount: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderLevelRefundAmount') }})
    reason_for_refund: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reasonForRefund') }})
    refund_items: Optional[List[RefundItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundItems') }})
    
