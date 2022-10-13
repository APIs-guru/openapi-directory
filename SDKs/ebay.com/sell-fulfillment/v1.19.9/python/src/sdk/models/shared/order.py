from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buyer
from . import cancelstatus
from . import fulfillmentstartinstruction
from . import lineitem
from . import paymentsummary
from . import pricingsummary
from . import program
from . import amount
from . import amount


@dataclass_json
@dataclass
class Order:
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    buyer_checkout_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerCheckoutNotes' }})
    cancel_status: Optional[cancelstatus.CancelStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelStatus' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    ebay_collect_and_remit_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebayCollectAndRemitTax' }})
    fulfillment_hrefs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentHrefs' }})
    fulfillment_start_instructions: Optional[List[fulfillmentstartinstruction.FulfillmentStartInstruction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillmentStartInstructions' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate' }})
    legacy_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyOrderId' }})
    line_items: Optional[List[lineitem.LineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    order_fulfillment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderFulfillmentStatus' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    order_payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderPaymentStatus' }})
    payment_summary: Optional[paymentsummary.PaymentSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentSummary' }})
    pricing_summary: Optional[pricingsummary.PricingSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingSummary' }})
    program: Optional[program.Program] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'program' }})
    sales_record_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesRecordReference' }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellerId' }})
    total_fee_basis_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFeeBasisAmount' }})
    total_marketplace_fee: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalMarketplaceFee' }})
    
