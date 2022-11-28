from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ConnectorResourcesOnePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorResourcesOneQueryParams:
    unified_api: Optional[shared.UnifiedAPIIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unified_api', 'style': 'form', 'explode': True }})
    

@dataclass
class ConnectorResourcesOneHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorResourcesOneSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectorResourcesOneRequest:
    headers: ConnectorResourcesOneHeaders = field()
    path_params: ConnectorResourcesOnePathParams = field()
    query_params: ConnectorResourcesOneQueryParams = field()
    security: ConnectorResourcesOneSecurity = field()
    

@dataclass
class ConnectorResourcesOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_connector_resource_response: Optional[shared.GetConnectorResourceResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    
