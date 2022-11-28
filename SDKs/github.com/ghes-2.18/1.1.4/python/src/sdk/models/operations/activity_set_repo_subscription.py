from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActivitySetRepoSubscriptionPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivitySetRepoSubscriptionRequestBody:
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignored') }})
    subscribed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscribed') }})
    

@dataclass
class ActivitySetRepoSubscriptionRequest:
    path_params: ActivitySetRepoSubscriptionPathParams = field()
    request: Optional[ActivitySetRepoSubscriptionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivitySetRepoSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    repository_subscription: Optional[shared.RepositorySubscription] = field(default=None)
    
