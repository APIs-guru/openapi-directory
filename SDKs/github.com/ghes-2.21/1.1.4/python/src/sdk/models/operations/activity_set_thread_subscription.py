from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActivitySetThreadSubscriptionPathParams:
    thread_id: int = field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivitySetThreadSubscriptionRequestBody:
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    

@dataclass
class ActivitySetThreadSubscriptionRequest:
    path_params: ActivitySetThreadSubscriptionPathParams = field()
    request: Optional[ActivitySetThreadSubscriptionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivitySetThreadSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    thread_subscription: Optional[shared.ThreadSubscription] = field(default=None)
    
