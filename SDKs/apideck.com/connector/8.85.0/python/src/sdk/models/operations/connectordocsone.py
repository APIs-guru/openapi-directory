from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConnectorDocsOnePathParams:
    doc_id: str = field(metadata={'path_param': { 'field_name': 'doc_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorDocsOneHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectorDocsOneSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConnectorDocsOneRequest:
    headers: ConnectorDocsOneHeaders = field()
    path_params: ConnectorDocsOnePathParams = field()
    security: ConnectorDocsOneSecurity = field()
    

@dataclass
class ConnectorDocsOneResponse:
    content_type: str = field()
    status_code: int = field()
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    connector_docs_one_200_text_markdown_markdown_string: Optional[str] = field(default=None)
    
