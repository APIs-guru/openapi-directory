from dataclasses import dataclass, field



@dataclass
class GetDocumentTextResourcePathParams:
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentTextResourceRequest:
    path_params: GetDocumentTextResourcePathParams = field(default=None)
    

@dataclass
class GetDocumentTextResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
