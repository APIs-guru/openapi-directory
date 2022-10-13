from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCurrentSubscriptionPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCurrentSubscriptionQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCurrentSubscriptionSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCurrentSubscriptionRequest:
    path_params: GetCurrentSubscriptionPathParams = field(default=None)
    query_params: GetCurrentSubscriptionQueryParams = field(default=None)
    security: GetCurrentSubscriptionSecurity = field(default=None)
    

@dataclass
class GetCurrentSubscriptionResponse:
    content_type: str = field(default=None)
    itv_current_subscription: Optional[shared.ItvCurrentSubscription] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
