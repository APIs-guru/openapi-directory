from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConsumersAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ConsumersAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ConsumersAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConsumersAllRequest:
    query_params: ConsumersAllQueryParams = field(default=None)
    headers: ConsumersAllHeaders = field(default=None)
    security: ConsumersAllSecurity = field(default=None)
    

@dataclass
class ConsumersAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_consumers_response: Optional[shared.GetConsumersResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConsumersAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConsumersAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
