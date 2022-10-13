from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BillsAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class BillsAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class BillsAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class BillsAddRequest:
    query_params: BillsAddQueryParams = field(default=None)
    headers: BillsAddHeaders = field(default=None)
    request: shared.Bill = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BillsAddSecurity = field(default=None)
    

@dataclass
class BillsAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_bill_response: Optional[shared.CreateBillResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class BillsAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, BillsAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
