from dataclasses import dataclass, field



@dataclass
class NewsSearchReadPathParams:
    title: str = field(default=None, metadata={'path_param': { 'field_name': 'title', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsSearchReadRequest:
    path_params: NewsSearchReadPathParams = field(default=None)
    

@dataclass
class NewsSearchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
