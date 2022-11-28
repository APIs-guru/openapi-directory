from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersMeSubscriptionsSubscriptionHandlePathParams:
    subscription_handle: str = field(metadata={'path_param': { 'field_name': 'subscriptionHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersMeSubscriptionsSubscriptionHandleSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsSubscriptionHandleRequest:
    path_params: GetUsersMeSubscriptionsSubscriptionHandlePathParams = field()
    security: GetUsersMeSubscriptionsSubscriptionHandleSecurity = field()
    

@dataclass
class GetUsersMeSubscriptionsSubscriptionHandleResponse:
    content_type: str = field()
    status_code: int = field()
    video_channel: Optional[Any] = field(default=None)
    
