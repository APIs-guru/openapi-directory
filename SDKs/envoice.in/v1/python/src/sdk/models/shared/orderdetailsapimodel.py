from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrderDetailsAPIModelStatusEnum(str, Enum):
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
class OrderDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AfterPaymentDescription') }})
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CouponCode') }})
    currency: Optional[CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscountAmount') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    order_billing_details: Optional[OrderBillingDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderBillingDetails') }})
    order_shipping_details: Optional[OrderShippingDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderShippingDetails') }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProductId') }})
    referral: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Referral') }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAmount') }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingDescription') }})
    status: Optional[OrderDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubTotalAmount') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxAmount') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    total_with_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalWithShipping') }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WhatHappensNextDescription') }})
    
