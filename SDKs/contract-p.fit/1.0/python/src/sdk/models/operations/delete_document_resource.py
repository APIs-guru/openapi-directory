from dataclasses import dataclass, field



@dataclass
class DeleteDocumentResourcePathParams:
    document_id: str = field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDocumentResourceRequest:
    path_params: DeleteDocumentResourcePathParams = field()
    

@dataclass
class DeleteDocumentResourceResponse:
    content_type: str = field()
    status_code: int = field()
    
