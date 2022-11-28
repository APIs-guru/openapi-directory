from dataclasses import dataclass, field



@dataclass
class NewsSearchReadPathParams:
    title: str = field(metadata={'path_param': { 'field_name': 'title', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsSearchReadRequest:
    path_params: NewsSearchReadPathParams = field()
    

@dataclass
class NewsSearchReadResponse:
    content_type: str = field()
    status_code: int = field()
    
