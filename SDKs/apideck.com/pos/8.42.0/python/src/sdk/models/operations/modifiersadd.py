from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ModifiersAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ModifiersAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ModifiersAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ModifiersAddRequest:
    query_params: ModifiersAddQueryParams = field(default=None)
    headers: ModifiersAddHeaders = field(default=None)
    request: shared.Modifier = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ModifiersAddSecurity = field(default=None)
    

@dataclass
class ModifiersAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_modifier_response: Optional[shared.CreateModifierResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ModifiersAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ModifiersAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
