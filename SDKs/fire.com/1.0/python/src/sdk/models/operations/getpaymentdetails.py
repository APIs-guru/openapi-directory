from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPaymentDetailsPathParams:
    payment_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentDetailsRequest:
    path_params: GetPaymentDetailsPathParams = field(default=None)
    
class GetPaymentDetailsPaymentRequestStatusEnum(str, Enum):
    AWAITING_AUTHORISATION = "AWAITING_AUTHORISATION"
    AUTHORISED = "AUTHORISED"
    AWAITING_MULTI_AUTHORISATION = "AWAITING_MULTI_AUTHORISATION"
    NOT_AUTHORISED = "NOT_AUTHORISED"
    PAID = "PAID"
    REJECTED = "REJECTED"
    ACCEPTED = "ACCEPTED"
    RECEIVED = "RECEIVED"

class GetPaymentDetailsPaymentRequestTransactionTypeEnum(str, Enum):
    REFUND_REQUEST = "REFUND_REQUEST"
    PAYMENT = "PAYMENT"

class GetPaymentDetailsPaymentRequestTypeEnum(str, Enum):
    OTHER = "OTHER"


@dataclass_json
@dataclass
class GetPaymentDetailsPaymentRequest:
    additional_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalFields' }})
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    collect_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectFields' }})
    currency: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ican_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icanTo' }})
    mandatory_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mandatoryFields' }})
    max_number_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberPayments' }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'myRef' }})
    order_details: Optional[shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderDetails' }})
    payment_request_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentRequestCode' }})
    payment_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentUuid' }})
    return_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnUrl' }})
    status: Optional[GetPaymentDetailsPaymentRequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transaction_type: Optional[GetPaymentDetailsPaymentRequestTransactionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionType' }})
    type: Optional[GetPaymentDetailsPaymentRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookUrl' }})
    

@dataclass
class GetPaymentDetailsResponse:
    content_type: str = field(default=None)
    payment_request: Optional[GetPaymentDetailsPaymentRequest] = field(default=None)
    status_code: int = field(default=None)
    
