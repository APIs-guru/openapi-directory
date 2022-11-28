from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppsListSubscriptionsForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListSubscriptionsForAuthenticatedUserRequest:
    query_params: AppsListSubscriptionsForAuthenticatedUserQueryParams = field()
    

@dataclass
class AppsListSubscriptionsForAuthenticatedUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    user_marketplace_purchases: Optional[List[shared.UserMarketplacePurchase]] = field(default=None)
    
