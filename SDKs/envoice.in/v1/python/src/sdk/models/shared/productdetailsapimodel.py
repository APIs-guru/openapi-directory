from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProductDetailsAPIModelStatusEnum(str, Enum):
    ACTIVE = "Active"
    NOT_AVAILABLE = "NotAvailable"
    INACTIVE = "Inactive"


@dataclass_json
@dataclass
class ProductDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AfterPaymentDescription') }})
    button_call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ButtonCallToAction') }})
    currency: Optional[CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    is_featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsFeatured') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingAmount') }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShippingDescription') }})
    status: Optional[ProductDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubTotalAmount') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    total_with_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalWithShipping') }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WhatHappensNextDescription') }})
    
