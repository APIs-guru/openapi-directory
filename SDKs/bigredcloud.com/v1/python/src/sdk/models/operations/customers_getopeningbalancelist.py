from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomersGetOpeningBalanceListPathParams:
    item_id: int = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetOpeningBalanceListRequest:
    path_params: CustomersGetOpeningBalanceListPathParams = field()
    

@dataclass
class CustomersGetOpeningBalanceListResponse:
    content_type: str = field()
    status_code: int = field()
    owner_opening_balance_dtos: Optional[List[shared.OwnerOpeningBalanceDto]] = field(default=None)
    
