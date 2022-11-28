from dataclasses import dataclass, field



@dataclass
class ArticleGetPathParams:
    unique_keyword: str = field(metadata={'path_param': { 'field_name': 'uniqueKeyword', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArticleGetRequest:
    path_params: ArticleGetPathParams = field()
    

@dataclass
class ArticleGetResponse:
    content_type: str = field()
    status_code: int = field()
    
