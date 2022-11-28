from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StromkontoBalancesQueryParams:
    account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'account', 'style': 'form', 'explode': True }})
    

@dataclass
class StromkontoBalancesRequest:
    query_params: StromkontoBalancesQueryParams = field()
    

@dataclass
class StromkontoBalancesResponse:
    content_type: str = field()
    status_code: int = field()
    balances: Optional[List[shared.Balance]] = field(default=None)
    
