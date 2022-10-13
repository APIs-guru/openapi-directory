from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import orderattachmentapimodel
from . import currencydetailsapimodel
from . import orderitemapimodel
from . import orderbillingdetailsapimodel
from . import ordershippingdetailsapimodel

class OrderFullDetailsAPIModelStatusEnum(str, Enum):
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
class OrderFullDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AfterPaymentDescription' }})
    attachments: Optional[List[orderattachmentapimodel.OrderAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CouponCode' }})
    currency: Optional[currencydetailsapimodel.CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    items: Optional[List[orderitemapimodel.OrderItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Note' }})
    order_billing_details: Optional[orderbillingdetailsapimodel.OrderBillingDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderBillingDetails' }})
    order_shipping_details: Optional[ordershippingdetailsapimodel.OrderShippingDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderShippingDetails' }})
    product_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductId' }})
    referral: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Referral' }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAmount' }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingDescription' }})
    status: Optional[OrderFullDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    total_with_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalWithShipping' }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WhatHappensNextDescription' }})
    
