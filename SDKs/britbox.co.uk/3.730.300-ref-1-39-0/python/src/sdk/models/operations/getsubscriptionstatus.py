from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionStatusPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionStatusQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubscriptionStatusSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSubscriptionStatusRequest:
    path_params: GetSubscriptionStatusPathParams = field(default=None)
    query_params: GetSubscriptionStatusQueryParams = field(default=None)
    security: GetSubscriptionStatusSecurity = field(default=None)
    

@dataclass
class GetSubscriptionStatusResponse:
    content_type: str = field(default=None)
    itv_subscription_status_response: Optional[shared.ItvSubscriptionStatusResponse] = field(default=None)
    status_code: int = field(default=None)
    
