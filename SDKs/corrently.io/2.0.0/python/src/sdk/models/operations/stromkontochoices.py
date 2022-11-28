from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StromkontoChoicesQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class StromkontoChoicesRequest:
    query_params: StromkontoChoicesQueryParams = field()
    

@dataclass
class StromkontoChoicesResponse:
    content_type: str = field()
    status_code: int = field()
    balances: Optional[List[shared.Balance]] = field(default=None)
    
