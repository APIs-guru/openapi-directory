from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandlePathParams:
    subscription_handle: str = field(metadata={'path_param': { 'field_name': 'subscriptionHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandleSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandleRequest:
    path_params: DeleteUsersMeSubscriptionsSubscriptionHandlePathParams = field()
    security: DeleteUsersMeSubscriptionsSubscriptionHandleSecurity = field()
    

@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandleResponse:
    content_type: str = field()
    status_code: int = field()
    
