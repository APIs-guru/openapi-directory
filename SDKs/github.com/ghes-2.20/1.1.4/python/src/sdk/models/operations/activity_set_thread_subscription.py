from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActivitySetThreadSubscriptionPathParams:
    thread_id: int = field(default=None, metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivitySetThreadSubscriptionRequestBody:
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignored' }})
    

@dataclass
class ActivitySetThreadSubscriptionRequest:
    path_params: ActivitySetThreadSubscriptionPathParams = field(default=None)
    request: Optional[ActivitySetThreadSubscriptionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivitySetThreadSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    thread_subscription: Optional[shared.ThreadSubscription] = field(default=None)
    
