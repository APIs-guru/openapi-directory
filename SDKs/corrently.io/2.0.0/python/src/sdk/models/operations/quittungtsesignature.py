from dataclasses import dataclass, field
from typing import Optional


@dataclass
class QuittungTsEsignatureQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class QuittungTsEsignatureRequest:
    query_params: QuittungTsEsignatureQueryParams = field()
    

@dataclass
class QuittungTsEsignatureResponse:
    content_type: str = field()
    status_code: int = field()
    
