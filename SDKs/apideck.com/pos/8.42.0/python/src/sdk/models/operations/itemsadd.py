from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemsAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ItemsAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ItemsAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ItemsAddRequest:
    query_params: ItemsAddQueryParams = field(default=None)
    headers: ItemsAddHeaders = field(default=None)
    request: shared.Item = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ItemsAddSecurity = field(default=None)
    

@dataclass
class ItemsAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_item_response: Optional[shared.CreateItemResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ItemsAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ItemsAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
