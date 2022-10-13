from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TendersAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class TendersAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class TendersAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TendersAddRequest:
    query_params: TendersAddQueryParams = field(default=None)
    headers: TendersAddHeaders = field(default=None)
    request: shared.Tender = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: TendersAddSecurity = field(default=None)
    

@dataclass
class TendersAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_tender_response: Optional[shared.CreateTenderResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class TendersAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, TendersAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
