from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductUpdateAPIModelStatusEnum(str, Enum):
    ACTIVE = "Active"
    NOT_AVAILABLE = "NotAvailable"
    INACTIVE = "Inactive"


@dataclass_json
@dataclass
class ProductUpdateAPIModel:
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AfterPaymentDescription') }})
    attachments: Optional[List[ProductAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    button_call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ButtonCallToAction') }})
    coupons: Optional[List[ProductCouponAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Coupons') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    discounts: Optional[List[ProductDiscountAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Discounts') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    is_featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFeatured') }})
    items: Optional[List[ProductItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    payment_gateways: Optional[List[ProductGatewayAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentGateways') }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAmount') }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingDescription') }})
    status: Optional[ProductUpdateAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WhatHappensNextDescription') }})
    
