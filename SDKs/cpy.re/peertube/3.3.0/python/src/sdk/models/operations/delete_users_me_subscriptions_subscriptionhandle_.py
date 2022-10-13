from dataclasses import dataclass, field



@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandlePathParams:
    subscription_handle: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionHandle', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandleSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandleRequest:
    path_params: DeleteUsersMeSubscriptionsSubscriptionHandlePathParams = field(default=None)
    security: DeleteUsersMeSubscriptionsSubscriptionHandleSecurity = field(default=None)
    

@dataclass
class DeleteUsersMeSubscriptionsSubscriptionHandleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
