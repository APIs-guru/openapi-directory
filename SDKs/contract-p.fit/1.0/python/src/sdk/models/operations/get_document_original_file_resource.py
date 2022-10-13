from dataclasses import dataclass, field



@dataclass
class GetDocumentOriginalFileResourcePathParams:
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentOriginalFileResourceRequest:
    path_params: GetDocumentOriginalFileResourcePathParams = field(default=None)
    

@dataclass
class GetDocumentOriginalFileResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
