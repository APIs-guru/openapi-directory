from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class APIResourcesOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIResourcesOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class APIResourcesOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIResourcesOneRequest:
    path_params: APIResourcesOnePathParams = field(default=None)
    headers: APIResourcesOneHeaders = field(default=None)
    security: APIResourcesOneSecurity = field(default=None)
    

@dataclass
class APIResourcesOneResponses:
    get_api_resource_response: Optional[shared.GetAPIResourceResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    

@dataclass
class APIResourcesOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, APIResourcesOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
