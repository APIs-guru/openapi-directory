from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CustomersGetOpeningBalanceListPathParams:
    item_id: int = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetOpeningBalanceListRequest:
    path_params: CustomersGetOpeningBalanceListPathParams = field(default=None)
    

@dataclass
class CustomersGetOpeningBalanceListResponse:
    content_type: str = field(default=None)
    owner_opening_balance_dtos: Optional[List[shared.OwnerOpeningBalanceDto]] = field(default=None)
    status_code: int = field(default=None)
    
