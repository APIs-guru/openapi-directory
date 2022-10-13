from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectionSettingsAllPathParams:
    resource: str = field(default=None, metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = field(default=None, metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionSettingsAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class ConnectionSettingsAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionSettingsAllRequest:
    path_params: ConnectionSettingsAllPathParams = field(default=None)
    headers: ConnectionSettingsAllHeaders = field(default=None)
    security: ConnectionSettingsAllSecurity = field(default=None)
    

@dataclass
class ConnectionSettingsAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_connection_response: Optional[shared.GetConnectionResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectionSettingsAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionSettingsAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
