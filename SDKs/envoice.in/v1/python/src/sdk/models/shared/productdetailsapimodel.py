from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import currencydetailsapimodel

class ProductDetailsAPIModelStatusEnum(str, Enum):
    ACTIVE = "Active"
    NOT_AVAILABLE = "NotAvailable"
    INACTIVE = "Inactive"


@dataclass_json
@dataclass
class ProductDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AfterPaymentDescription' }})
    button_call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ButtonCallToAction' }})
    currency: Optional[currencydetailsapimodel.CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFeatured' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAmount' }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingDescription' }})
    status: Optional[ProductDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    total_with_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalWithShipping' }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WhatHappensNextDescription' }})
    
