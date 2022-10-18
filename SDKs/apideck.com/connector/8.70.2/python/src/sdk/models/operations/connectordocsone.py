from dataclasses import dataclass, field
from typing import Optional
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
class ConnectorDocsOneResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    
