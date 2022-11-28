from dataclasses import dataclass, field



@dataclass
class GetDocumentOriginalFileResourcePathParams:
    document_id: str = field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentOriginalFileResourceRequest:
    path_params: GetDocumentOriginalFileResourcePathParams = field()
    

@dataclass
class GetDocumentOriginalFileResourceResponse:
    content_type: str = field()
    status_code: int = field()
    
