from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import productattachmentapimodel
from . import productcouponapimodel
from . import currencydetailsapimodel
from . import productdiscountapimodel
from . import productitemapimodel
from . import productgatewayapimodel

class ProductFullDetailsAPIModelStatusEnum(str, Enum):
    ACTIVE = "Active"
    NOT_AVAILABLE = "NotAvailable"
    INACTIVE = "Inactive"


@dataclass_json
@dataclass
class ProductFullDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    after_payment_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AfterPaymentDescription' }})
    attachments: Optional[List[productattachmentapimodel.ProductAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    button_call_to_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ButtonCallToAction' }})
    coupons: Optional[List[productcouponapimodel.ProductCouponAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Coupons' }})
    currency: Optional[currencydetailsapimodel.CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    discounts: Optional[List[productdiscountapimodel.ProductDiscountAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Discounts' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    is_featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFeatured' }})
    items: Optional[List[productitemapimodel.ProductItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    payment_gateways: Optional[List[productgatewayapimodel.ProductGatewayAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentGateways' }})
    shipping_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingAmount' }})
    shipping_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShippingDescription' }})
    status: Optional[ProductFullDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    total_with_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalWithShipping' }})
    what_happens_next_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WhatHappensNextDescription' }})
    
