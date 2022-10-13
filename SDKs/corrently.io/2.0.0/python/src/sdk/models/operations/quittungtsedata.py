from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QuittungTseDataQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class QuittungTseDataRequest:
    query_params: QuittungTseDataQueryParams = field(default=None)
    

@dataclass
class QuittungTseDataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
