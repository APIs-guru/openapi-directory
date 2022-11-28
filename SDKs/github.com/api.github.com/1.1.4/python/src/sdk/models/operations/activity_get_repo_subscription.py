from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetRepoSubscriptionPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityGetRepoSubscriptionRequest:
    path_params: ActivityGetRepoSubscriptionPathParams = field()
    

@dataclass
class ActivityGetRepoSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository_subscription: Optional[shared.RepositorySubscription] = field(default=None)
    
