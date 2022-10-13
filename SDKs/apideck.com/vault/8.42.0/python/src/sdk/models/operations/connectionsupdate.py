from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectionsUpdatePathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = field(default=None, metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class ConnectionsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionsUpdateRequest:
    path_params: ConnectionsUpdatePathParams = field(default=None)
    headers: ConnectionsUpdateHeaders = field(default=None)
    request: shared.Connection = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ConnectionsUpdateSecurity = field(default=None)
    

@dataclass
class ConnectionsUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_connection_response: Optional[shared.UpdateConnectionResponse] = field(default=None)
    

@dataclass
class ConnectionsUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionsUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
