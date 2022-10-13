from dataclasses import dataclass, field



@dataclass
class ContentGetContentTypePathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentGetContentTypeRequest:
    path_params: ContentGetContentTypePathParams = field(default=None)
    

@dataclass
class ContentGetContentTypeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
