from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ItemsDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ItemsDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ItemsDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ItemsDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ItemsDeleteRequest:
    path_params: ItemsDeletePathParams = field(default=None)
    query_params: ItemsDeleteQueryParams = field(default=None)
    headers: ItemsDeleteHeaders = field(default=None)
    security: ItemsDeleteSecurity = field(default=None)
    

@dataclass
class ItemsDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_item_response: Optional[shared.DeleteItemResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ItemsDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ItemsDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
