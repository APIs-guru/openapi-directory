from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrderCreateAPIModelStatusEnum(str, Enum):
    PENDING_PAYMENT = "PendingPayment"
    PROCESSING = "Processing"
    SHIPPED = "Shipped"
    COMPLETED = "Completed"
    ON_HOLD = "OnHold"
    CANCELLED = "Cancelled"
    REFUNDED = "Refunded"
    FAILED = "Failed"


@dataclass_json
@dataclass
class OrderCreateAPIModel:
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AfterPaymentDescription') }})
    attachments: Optional[List[OrderAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CouponCode') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscountAmount') }})
    items: Optional[List[OrderItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    order_billing_details: Optional[OrderBillingDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderBillingDetails') }})
    order_shipping_details: Optional[OrderShippingDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderShippingDetails') }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    referral: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Referral') }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAmount') }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingDescription') }})
    status: Optional[OrderCreateAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubTotalAmount') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxAmount') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WhatHappensNextDescription') }})
    
