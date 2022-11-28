from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetSubscriptionPlanForAccountStubbedPathParams:
    account_id: int = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetSubscriptionPlanForAccountStubbedRequest:
    path_params: AppsGetSubscriptionPlanForAccountStubbedPathParams = field()
    

@dataclass
class AppsGetSubscriptionPlanForAccountStubbedResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    marketplace_purchase: Optional[shared.MarketplacePurchase] = field(default=None)
    
