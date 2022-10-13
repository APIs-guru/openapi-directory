from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectionsImportPathParams:
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = field(default=None, metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsImportHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class ConnectionsImportSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionsImportRequest:
    path_params: ConnectionsImportPathParams = field(default=None)
    headers: ConnectionsImportHeaders = field(default=None)
    request: shared.ConnectionImportData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ConnectionsImportSecurity = field(default=None)
    

@dataclass
class ConnectionsImportResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_connection_response: Optional[shared.CreateConnectionResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectionsImportResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionsImportResponses]] = field(default=None)
    status_code: int = field(default=None)
    
