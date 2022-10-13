from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConnectorResourcesOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(default=None, metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorResourcesOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ConnectorResourcesOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectorResourcesOneRequest:
    path_params: ConnectorResourcesOnePathParams = field(default=None)
    headers: ConnectorResourcesOneHeaders = field(default=None)
    security: ConnectorResourcesOneSecurity = field(default=None)
    

@dataclass
class ConnectorResourcesOneResponse:
    content_type: str = field(default=None)
    get_connector_resource_response: Optional[shared.GetConnectorResourceResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    
