from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConnectionSettingsAllPathParams:
    resource: str = field(metadata={'path_param': { 'field_name': 'resource', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = field(metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionSettingsAllHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionSettingsAllSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionSettingsAllRequest:
    headers: ConnectionSettingsAllHeaders = field()
    path_params: ConnectionSettingsAllPathParams = field()
    security: ConnectionSettingsAllSecurity = field()
    

@dataclass
class ConnectionSettingsAllResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    get_connection_response: Optional[shared.GetConnectionResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
