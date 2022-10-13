from dataclasses import dataclass, field



@dataclass
class ArticleGetPathParams:
    unique_keyword: str = field(default=None, metadata={'path_param': { 'field_name': 'uniqueKeyword', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArticleGetRequest:
    path_params: ArticleGetPathParams = field(default=None)
    

@dataclass
class ArticleGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
