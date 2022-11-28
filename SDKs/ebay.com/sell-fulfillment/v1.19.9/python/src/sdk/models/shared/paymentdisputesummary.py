from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentDisputeSummary:
    r"""PaymentDisputeSummary
    This type is used by each payment dispute that is returned with the getPaymentDisputeSummaries method.
    """
    
    amount: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    buyer_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerUsername') }})
    closed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedDate') }})
    open_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDate') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    payment_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeId') }})
    payment_dispute_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeStatus') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondByDate') }})
    
