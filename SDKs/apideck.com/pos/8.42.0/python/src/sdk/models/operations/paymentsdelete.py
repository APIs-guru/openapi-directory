from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PaymentsDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PaymentsDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class PaymentsDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class PaymentsDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PaymentsDeleteRequest:
    path_params: PaymentsDeletePathParams = field(default=None)
    query_params: PaymentsDeleteQueryParams = field(default=None)
    headers: PaymentsDeleteHeaders = field(default=None)
    security: PaymentsDeleteSecurity = field(default=None)
    

@dataclass
class PaymentsDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_pos_payment_response: Optional[shared.DeletePosPaymentResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class PaymentsDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, PaymentsDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
