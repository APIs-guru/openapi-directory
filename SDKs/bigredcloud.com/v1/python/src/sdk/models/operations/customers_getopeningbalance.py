from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CustomersGetOpeningBalancePathParams:
    item_id: int = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CustomersGetOpeningBalanceRequest:
    path_params: CustomersGetOpeningBalancePathParams = field()
    

@dataclass
class CustomersGetOpeningBalanceResponse:
    content_type: str = field()
    status_code: int = field()
    owner_opening_balance_in_periods_dto: Optional[shared.OwnerOpeningBalanceInPeriodsDto] = field(default=None)
    
