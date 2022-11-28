from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NewPaymentRequestNewPaymentRequestCurrencyEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class NewPaymentRequestNewPaymentRequestOrderDetails:
    comment1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment1') }})
    comment2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment2') }})
    customer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerNumber') }})
    delivery_address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryAddressLine1') }})
    delivery_address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryAddressLine2') }})
    delivery_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCity') }})
    delivery_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCountry') }})
    delivery_post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPostCode') }})
    merchant_customer_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantCustomerIdentification') }})
    merchant_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantNumber') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    variable_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variableReference') }})
    
class NewPaymentRequestNewPaymentRequestTypeEnum(str, Enum):
    OTHER = "OTHER"


@dataclass_json
@dataclass
class NewPaymentRequestNewPaymentRequest:
    currency: NewPaymentRequestNewPaymentRequestCurrencyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    ican_to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    my_ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    type: NewPaymentRequestNewPaymentRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    additional_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalFields') }})
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    collect_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectFields') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mandatory_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryFields') }})
    max_number_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberPayments') }})
    order_details: Optional[NewPaymentRequestNewPaymentRequestOrderDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDetails') }})
    return_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnUrl') }})
    
class NewPaymentRequestNewPaymentRequestResponseTypeEnum(str, Enum):
    OTHER = "OTHER"


@dataclass_json
@dataclass
class NewPaymentRequestNewPaymentRequestResponse:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    type: Optional[NewPaymentRequestNewPaymentRequestResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class NewPaymentRequestRequest:
    request: NewPaymentRequestNewPaymentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NewPaymentRequestResponse:
    content_type: str = field()
    status_code: int = field()
    new_payment_request_response: Optional[NewPaymentRequestNewPaymentRequestResponse] = field(default=None)
    
