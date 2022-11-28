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
class Order:
    r"""Order
    This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.
    """
    
    buyer: Optional[Buyer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    buyer_checkout_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerCheckoutNotes') }})
    cancel_status: Optional[CancelStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelStatus') }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    ebay_collect_and_remit_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebayCollectAndRemitTax') }})
    fulfillment_hrefs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentHrefs') }})
    fulfillment_start_instructions: Optional[List[FulfillmentStartInstruction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillmentStartInstructions') }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate') }})
    legacy_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyOrderId') }})
    line_items: Optional[List[LineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    order_fulfillment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderFulfillmentStatus') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderPaymentStatus') }})
    payment_summary: Optional[PaymentSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentSummary') }})
    pricing_summary: Optional[PricingSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingSummary') }})
    program: Optional[Program] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    sales_record_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesRecordReference') }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellerId') }})
    total_fee_basis_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFeeBasisAmount') }})
    total_marketplace_fee: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMarketplaceFee') }})
    
