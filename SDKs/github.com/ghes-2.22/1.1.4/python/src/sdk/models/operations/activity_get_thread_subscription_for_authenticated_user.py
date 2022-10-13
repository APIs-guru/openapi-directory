from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserPathParams:
    thread_id: int = field(default=None, metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserRequest:
    path_params: ActivityGetThreadSubscriptionForAuthenticatedUserPathParams = field(default=None)
    

@dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    thread_subscription: Optional[shared.ThreadSubscription] = field(default=None)
    
