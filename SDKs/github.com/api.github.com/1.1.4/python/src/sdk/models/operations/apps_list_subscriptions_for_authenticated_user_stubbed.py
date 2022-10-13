from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class AppsListSubscriptionsForAuthenticatedUserStubbedRequest:
    query_params: AppsListSubscriptionsForAuthenticatedUserStubbedQueryParams = field(default=None)
    

@dataclass
class AppsListSubscriptionsForAuthenticatedUserStubbedResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    user_marketplace_purchases: Optional[List[shared.UserMarketplacePurchase]] = field(default=None)
    
