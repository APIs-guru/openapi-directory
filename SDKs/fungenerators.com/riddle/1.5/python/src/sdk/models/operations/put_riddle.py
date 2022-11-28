from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRiddleQueryParams:
    answer: str = field(metadata={'query_param': { 'field_name': 'answer', 'style': 'form', 'explode': True }})
    category: str = field(metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    question: str = field(metadata={'query_param': { 'field_name': 'question', 'style': 'form', 'explode': True }})
    

@dataclass
class PutRiddleSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRiddleRequest:
    query_params: PutRiddleQueryParams = field()
    security: PutRiddleSecurity = field()
    

@dataclass
class PutRiddleResponse:
    content_type: str = field()
    status_code: int = field()
    
