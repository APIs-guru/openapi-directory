from dataclasses import dataclass, field



@dataclass
class GetDocumentTextResourcePathParams:
    document_id: str = field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentTextResourceRequest:
    path_params: GetDocumentTextResourcePathParams = field()
    

@dataclass
class GetDocumentTextResourceResponse:
    content_type: str = field()
    status_code: int = field()
    
