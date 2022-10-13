from dataclasses import dataclass, field



@dataclass
class GetDocumentPageImageResourcePathParams:
    document_id: str = field(default=None, metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    page_range: str = field(default=None, metadata={'path_param': { 'field_name': 'page_range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentPageImageResourceRequest:
    path_params: GetDocumentPageImageResourcePathParams = field(default=None)
    

@dataclass
class GetDocumentPageImageResourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
