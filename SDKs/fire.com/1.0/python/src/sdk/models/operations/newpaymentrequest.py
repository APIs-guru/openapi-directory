from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NewPaymentRequestNewPaymentRequestCurrencyEnum(str, Enum):
    EUR = "EUR"
    GBP = "GBP"


@dataclass_json
@dataclass
class NewPaymentRequestNewPaymentRequestOrderDetails:
    comment1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment1' }})
    comment2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment2' }})
    customer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerNumber' }})
    delivery_address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryAddressLine1' }})
    delivery_address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryAddressLine2' }})
    delivery_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCity' }})
    delivery_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCountry' }})
    delivery_post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryPostCode' }})
    merchant_customer_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantCustomerIdentification' }})
    merchant_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantNumber' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    variable_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variableReference' }})
    
class NewPaymentRequestNewPaymentRequestTypeEnum(str, Enum):
    OTHER = "OTHER"


@dataclass_json
@dataclass
class NewPaymentRequestNewPaymentRequest:
    additional_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalFields' }})
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    collect_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectFields' }})
    currency: NewPaymentRequestNewPaymentRequestCurrencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ican_to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanTo' }})
    mandatory_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatoryFields' }})
    max_number_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberPayments' }})
    my_ref: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'myRef' }})
    order_details: Optional[NewPaymentRequestNewPaymentRequestOrderDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderDetails' }})
    return_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnUrl' }})
    type: NewPaymentRequestNewPaymentRequestTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NewPaymentRequestRequest:
    request: NewPaymentRequestNewPaymentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class NewPaymentRequestNewPaymentRequestResponseTypeEnum(str, Enum):
    OTHER = "OTHER"


@dataclass_json
@dataclass
class NewPaymentRequestNewPaymentRequestResponse:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    type: Optional[NewPaymentRequestNewPaymentRequestResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NewPaymentRequestResponse:
    content_type: str = field(default=None)
    new_payment_request_response: Optional[NewPaymentRequestNewPaymentRequestResponse] = field(default=None)
    status_code: int = field(default=None)
    
