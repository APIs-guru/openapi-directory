from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConnectorsOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectorsOneRequest:
    path_params: ConnectorsOnePathParams = field(default=None)
    headers: ConnectorsOneHeaders = field(default=None)
    security: ConnectorsOneSecurity = field(default=None)
    

@dataclass
class ConnectorsOneResponse:
    content_type: str = field(default=None)
    get_connector_response: Optional[shared.GetConnectorResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    
