from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum(str, Enum):
    ACH_FAILURE = "ACHFailure"
    ADJUSTMENT = "Adjustment"
    ATTEMPT_FAILED = "AttemptFailed"
    CHARGEBACK = "Chargeback"
    CREDIT = "Credit"
    CREDIT_EXPIRATION = "CreditExpiration"
    INVOICE = "Invoice"
    PAYMENT = "Payment"
    REFUND = "Refund"
    REVERSAL = "Reversal"


@dataclass_json
@dataclass
class ListBillingHistory200ApplicationJSONBillingHistory:
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_id' }})
    invoice_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_uuid' }})
    type: Optional[ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class ListBillingHistory200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListBillingHistory200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListBillingHistory200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListBillingHistory200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListBillingHistory200ApplicationJSON:
    billing_history: List[ListBillingHistory200ApplicationJSONBillingHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_history' }})
    links: Optional[ListBillingHistory200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListBillingHistory200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListBillingHistory401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListBillingHistoryResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_billing_history_200_application_json_object: Optional[ListBillingHistory200ApplicationJSON] = field(default=None)
    list_billing_history_401_application_json_object: Optional[ListBillingHistory401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
