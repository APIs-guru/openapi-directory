from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActivitySetRepoSubscriptionPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivitySetRepoSubscriptionRequestBody:
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignored' }})
    subscribed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribed' }})
    

@dataclass
class ActivitySetRepoSubscriptionRequest:
    path_params: ActivitySetRepoSubscriptionPathParams = field(default=None)
    request: Optional[ActivitySetRepoSubscriptionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivitySetRepoSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    repository_subscription: Optional[shared.RepositorySubscription] = field(default=None)
    
