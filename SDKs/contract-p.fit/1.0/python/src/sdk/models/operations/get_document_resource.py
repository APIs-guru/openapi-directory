from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDocumentResourcePathParams:
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentResourceHeaders:
    x_fields: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Fields' }})
    

@dataclass
class GetDocumentResourceRequest:
    path_params: GetDocumentResourcePathParams = field(default=None)
    headers: GetDocumentResourceHeaders = field(default=None)
    

@dataclass
class GetDocumentResourceResponse:
    content_type: str = field(default=None)
    document_model_get: Optional[shared.DocumentModelGet] = field(default=None)
    status_code: int = field(default=None)
    
