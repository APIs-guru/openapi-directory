from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PaymentDispute:
    r"""PaymentDispute
    This type is used by the base response of the getPaymentDispute method. The getPaymentDispute method retrieves detailed information on a specific payment dispute.
    """
    
    amount: Optional[SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    available_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableChoices') }})
    buyer_provided: Optional[InfoFromBuyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerProvided') }})
    buyer_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerUsername') }})
    closed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedDate') }})
    evidence: Optional[List[DisputeEvidence]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidence') }})
    evidence_requests: Optional[List[EvidenceRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evidenceRequests') }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    monetary_transactions: Optional[List[MonetaryTransaction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monetaryTransactions') }})
    open_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openDate') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    payment_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeId') }})
    payment_dispute_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentDisputeStatus') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    resolution: Optional[PaymentDisputeOutcomeDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('respondByDate') }})
    return_address: Optional[ReturnAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnAddress') }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    seller_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerResponse') }})
    
