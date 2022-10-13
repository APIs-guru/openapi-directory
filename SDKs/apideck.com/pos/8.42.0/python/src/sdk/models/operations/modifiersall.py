from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ModifiersAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ModifiersAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ModifiersAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ModifiersAllRequest:
    query_params: ModifiersAllQueryParams = field(default=None)
    headers: ModifiersAllHeaders = field(default=None)
    security: ModifiersAllSecurity = field(default=None)
    

@dataclass
class ModifiersAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_modifiers_response: Optional[shared.GetModifiersResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ModifiersAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ModifiersAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
