from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateOrderHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateOrderRequestBodyPaymentOptionEnum(str, Enum):
    ALL_UPFRONT = "ALL_UPFRONT"
    NO_UPFRONT = "NO_UPFRONT"
    PARTIAL_UPFRONT = "PARTIAL_UPFRONT"

class CreateOrderRequestBodyPaymentTermEnum(str, Enum):
    THREE_YEARS = "THREE_YEARS"


@dataclass_json
@dataclass
class CreateOrderRequestBody:
    line_items: List[shared.LineItemRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineItems' }})
    outpost_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostIdentifier' }})
    payment_option: CreateOrderRequestBodyPaymentOptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentOption' }})
    payment_term: Optional[CreateOrderRequestBodyPaymentTermEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentTerm' }})
    

@dataclass
class CreateOrderRequest:
    headers: CreateOrderHeaders = field(default=None)
    request: CreateOrderRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOrderResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_order_output: Optional[shared.CreateOrderOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
