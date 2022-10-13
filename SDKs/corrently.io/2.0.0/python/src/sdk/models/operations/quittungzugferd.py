from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QuittungZugferdQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class QuittungZugferdRequest:
    query_params: QuittungZugferdQueryParams = field(default=None)
    

@dataclass
class QuittungZugferdResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
