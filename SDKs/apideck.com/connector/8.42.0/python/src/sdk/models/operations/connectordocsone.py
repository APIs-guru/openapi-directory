from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConnectorDocsOnePathParams:
    doc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'doc_id', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorDocsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ConnectorDocsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectorDocsOneRequest:
    path_params: ConnectorDocsOnePathParams = field(default=None)
    headers: ConnectorDocsOneHeaders = field(default=None)
    security: ConnectorDocsOneSecurity = field(default=None)
    

@dataclass
class ConnectorDocsOneResponses:
    get_connector_response: Optional[shared.GetConnectorResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectorDocsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectorDocsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
