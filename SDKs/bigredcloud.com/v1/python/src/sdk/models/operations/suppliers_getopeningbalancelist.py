from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SuppliersGetOpeningBalanceListPathParams:
    item_id: int = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SuppliersGetOpeningBalanceListRequest:
    path_params: SuppliersGetOpeningBalanceListPathParams = field(default=None)
    

@dataclass
class SuppliersGetOpeningBalanceListResponse:
    content_type: str = field(default=None)
    owner_opening_balance_dtos: Optional[List[shared.OwnerOpeningBalanceDto]] = field(default=None)
    status_code: int = field(default=None)
    
