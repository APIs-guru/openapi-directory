from dataclasses import dataclass, field



@dataclass
class DeleteDocumentResourcePathParams:
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentResourceRequest:
    path_params: DeleteDocumentResourcePathParams = field(default=None)
    

@dataclass
class DeleteDocumentResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
