from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ModifiersOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifiersOneQueryParams:
    filter: Optional[shared.ModifierGroupFilter] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ModifiersOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ModifiersOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ModifiersOneRequest:
    path_params: ModifiersOnePathParams = field(default=None)
    query_params: ModifiersOneQueryParams = field(default=None)
    headers: ModifiersOneHeaders = field(default=None)
    security: ModifiersOneSecurity = field(default=None)
    

@dataclass
class ModifiersOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_modifier_response: Optional[shared.GetModifierResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ModifiersOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ModifiersOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
