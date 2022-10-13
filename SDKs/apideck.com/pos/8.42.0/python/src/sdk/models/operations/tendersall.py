from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TendersAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class TendersAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class TendersAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TendersAllRequest:
    query_params: TendersAllQueryParams = field(default=None)
    headers: TendersAllHeaders = field(default=None)
    security: TendersAllSecurity = field(default=None)
    

@dataclass
class TendersAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_tenders_response: Optional[shared.GetTendersResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class TendersAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, TendersAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
