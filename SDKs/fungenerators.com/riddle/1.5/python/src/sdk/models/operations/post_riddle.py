from dataclasses import dataclass, field



@dataclass
class PostRiddleQueryParams:
    answer: str = field(default=None, metadata={'query_param': { 'field_name': 'answer', 'style': 'form', 'explode': True }})
    category: str = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    question: str = field(default=None, metadata={'query_param': { 'field_name': 'question', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRiddleRequest:
    query_params: PostRiddleQueryParams = field(default=None)
    security: PostRiddleSecurity = field(default=None)
    

@dataclass
class PostRiddleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
