from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetSubscriptionPlanForAccountStubbedPathParams:
    account_id: int = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetSubscriptionPlanForAccountStubbedRequest:
    path_params: AppsGetSubscriptionPlanForAccountStubbedPathParams = field(default=None)
    

@dataclass
class AppsGetSubscriptionPlanForAccountStubbedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    marketplace_purchase: Optional[shared.MarketplacePurchase] = field(default=None)
    
