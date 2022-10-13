from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectionsAllQueryParams:
    api: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api', 'style': 'form', 'explode': True }})
    configured: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'configured', 'style': 'form', 'explode': True }})
    

@dataclass
class ConnectionsAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class ConnectionsAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionsAllRequest:
    query_params: ConnectionsAllQueryParams = field(default=None)
    headers: ConnectionsAllHeaders = field(default=None)
    security: ConnectionsAllSecurity = field(default=None)
    

@dataclass
class ConnectionsAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_connections_response: Optional[shared.GetConnectionsResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectionsAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionsAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
