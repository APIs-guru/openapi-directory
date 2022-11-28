from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserPathParams:
    thread_id: int = field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserRequest:
    path_params: ActivityGetThreadSubscriptionForAuthenticatedUserPathParams = field()
    

@dataclass
class ActivityGetThreadSubscriptionForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    thread_subscription: Optional[shared.ThreadSubscription] = field(default=None)
    
