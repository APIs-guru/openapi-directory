from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectionsOnePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = field(default=None, metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class ConnectionsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionsOneRequest:
    path_params: ConnectionsOnePathParams = field(default=None)
    headers: ConnectionsOneHeaders = field(default=None)
    security: ConnectionsOneSecurity = field(default=None)
    

@dataclass
class ConnectionsOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_connection_response: Optional[shared.GetConnectionResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectionsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
