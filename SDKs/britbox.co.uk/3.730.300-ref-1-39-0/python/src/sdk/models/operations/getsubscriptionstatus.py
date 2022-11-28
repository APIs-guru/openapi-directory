from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionStatusPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionStatusQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubscriptionStatusSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSubscriptionStatusRequest:
    path_params: GetSubscriptionStatusPathParams = field()
    query_params: GetSubscriptionStatusQueryParams = field()
    security: GetSubscriptionStatusSecurity = field()
    

@dataclass
class GetSubscriptionStatusResponse:
    content_type: str = field()
    status_code: int = field()
    itv_subscription_status_response: Optional[shared.ItvSubscriptionStatusResponse] = field(default=None)
    
