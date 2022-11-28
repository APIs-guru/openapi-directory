from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QuittungTseDataQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class QuittungTseDataRequest:
    query_params: QuittungTseDataQueryParams = field()
    

@dataclass
class QuittungTseDataResponse:
    content_type: str = field()
    status_code: int = field()
    
