from dataclasses import dataclass, field



@dataclass
class GetDocumentPageImageResourcePathParams:
    document_id: str = field(metadata={'path_param': { 'field_name': 'document_id', 'style': 'simple', 'explode': False }})
    page_range: str = field(metadata={'path_param': { 'field_name': 'page_range', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDocumentPageImageResourceRequest:
    path_params: GetDocumentPageImageResourcePathParams = field()
    

@dataclass
class GetDocumentPageImageResourceResponse:
    content_type: str = field()
    status_code: int = field()
    
