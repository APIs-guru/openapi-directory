from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetSubscriptionPlanForAccountPathParams:
    account_id: int = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetSubscriptionPlanForAccountRequest:
    path_params: AppsGetSubscriptionPlanForAccountPathParams = field()
    

@dataclass
class AppsGetSubscriptionPlanForAccountResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    marketplace_purchase: Optional[shared.MarketplacePurchase] = field(default=None)
    
