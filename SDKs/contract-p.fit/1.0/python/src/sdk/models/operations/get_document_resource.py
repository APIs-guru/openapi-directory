from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDocumentResourcePathParams:
    document_id: str = field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentResourceHeaders:
    x_fields: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Fields', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentResourceRequest:
    headers: GetDocumentResourceHeaders = field()
    path_params: GetDocumentResourcePathParams = field()
    

@dataclass
class GetDocumentResourceResponse:
    content_type: str = field()
    status_code: int = field()
    document_model_get: Optional[shared.DocumentModelGet] = field(default=None)
    
