from dataclasses import dataclass, field



@dataclass
class ContentSearchHelpArticlesPathParams:
    searchtext: str = field(default=None, metadata={'path_param': { 'field_name': 'searchtext', 'style': 'simple', 'explode': False }})
    size: str = field(default=None, metadata={'path_param': { 'field_name': 'size', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentSearchHelpArticlesRequest:
    path_params: ContentSearchHelpArticlesPathParams = field(default=None)
    

@dataclass
class ContentSearchHelpArticlesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
