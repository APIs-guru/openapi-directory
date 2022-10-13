from dataclasses import dataclass, field



@dataclass
class PutRiddleQueryParams:
    answer: str = field(default=None, metadata={'query_param': { 'field_name': 'answer', 'style': 'form', 'explode': True }})
    category: str = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    question: str = field(default=None, metadata={'query_param': { 'field_name': 'question', 'style': 'form', 'explode': True }})
    

@dataclass
class PutRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRiddleRequest:
    query_params: PutRiddleQueryParams = field(default=None)
    security: PutRiddleSecurity = field(default=None)
    

@dataclass
class PutRiddleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
