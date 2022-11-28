from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPaymentDetailsPathParams:
    payment_uuid: str = field(metadata={'path_param': { 'field_name': 'paymentUuid', 'style': 'simple', 'explode': False }})
    
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
    additional_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalFields') }})
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    collect_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectFields') }})
    currency: Optional[shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expiry: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ican_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icanTo') }})
    mandatory_fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mandatoryFields') }})
    max_number_payments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberPayments') }})
    my_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('myRef') }})
    order_details: Optional[shared.OnepaymentrequestsPostRequestBodyContentApplication1jsonSchemaPropertiesOrderDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderDetails') }})
    payment_request_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentRequestCode') }})
    payment_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentUuid') }})
    return_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnUrl') }})
    status: Optional[GetPaymentDetailsPaymentRequestStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_type: Optional[GetPaymentDetailsPaymentRequestTransactionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionType') }})
    type: Optional[GetPaymentDetailsPaymentRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookUrl') }})
    

@dataclass
class GetPaymentDetailsRequest:
    path_params: GetPaymentDetailsPathParams = field()
    

@dataclass
class GetPaymentDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    payment_request: Optional[GetPaymentDetailsPaymentRequest] = field(default=None)
    
