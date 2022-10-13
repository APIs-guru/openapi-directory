from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersMeSubscriptionsSubscriptionHandlePathParams:
    subscription_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersMeSubscriptionsSubscriptionHandleSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsSubscriptionHandleRequest:
    path_params: GetUsersMeSubscriptionsSubscriptionHandlePathParams = field(default=None)
    security: GetUsersMeSubscriptionsSubscriptionHandleSecurity = field(default=None)
    

@dataclass
class GetUsersMeSubscriptionsSubscriptionHandleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_channel: Optional[Any] = field(default=None)
    
