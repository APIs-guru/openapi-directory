from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Charge:
    r"""Charge
    This type is used by the charge container, which is an array of one or more charges related to the transfer.
    """
    
    cancellation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancellationId') }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseId') }})
    charge_net_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeNetAmount') }})
    inquiry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inquiryId') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    payment_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeId') }})
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundId') }})
    return_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnId') }})
    
