from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionStateQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSubscriptionStateSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSubscriptionStateRequest:
    query_params: GetSubscriptionStateQueryParams = field(default=None)
    security: GetSubscriptionStateSecurity = field(default=None)
    

@dataclass
class GetSubscriptionStateResponse:
    content_type: str = field(default=None)
    itv_subscription_state: Optional[shared.ItvSubscriptionState] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
