from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConnectionsAddPathParams:
    service_id: str = field(metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    unified_api: str = field(metadata={'path_param': { 'field_name': 'unified_api', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsAddHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsAddSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectionsAddRequest:
    headers: ConnectionsAddHeaders = field()
    path_params: ConnectionsAddPathParams = field()
    request: shared.ConnectionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ConnectionsAddSecurity = field()
    

@dataclass
class ConnectionsAddResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    create_connection_response: Optional[shared.CreateConnectionResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
