from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simpleamount
from . import infofrombuyer
from . import disputeevidence
from . import evidencerequest
from . import orderlineitems
from . import monetarytransaction
from . import paymentdisputeoutcomedetail
from . import returnaddress


@dataclass_json
@dataclass
class PaymentDispute:
    amount: Optional[simpleamount.SimpleAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    available_choices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableChoices' }})
    buyer_provided: Optional[infofrombuyer.InfoFromBuyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerProvided' }})
    buyer_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerUsername' }})
    closed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedDate' }})
    evidence: Optional[List[disputeevidence.DisputeEvidence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidence' }})
    evidence_requests: Optional[List[evidencerequest.EvidenceRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evidenceRequests' }})
    line_items: Optional[List[orderlineitems.OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    monetary_transactions: Optional[List[monetarytransaction.MonetaryTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monetaryTransactions' }})
    open_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openDate' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    payment_dispute_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDisputeId' }})
    payment_dispute_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDisputeStatus' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    resolution: Optional[paymentdisputeoutcomedetail.PaymentDisputeOutcomeDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    respond_by_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'respondByDate' }})
    return_address: Optional[returnaddress.ReturnAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnAddress' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    seller_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerResponse' }})
    
