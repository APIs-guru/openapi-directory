from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetRepoSubscriptionPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityGetRepoSubscriptionRequest:
    path_params: ActivityGetRepoSubscriptionPathParams = field(default=None)
    

@dataclass
class ActivityGetRepoSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    repository_subscription: Optional[shared.RepositorySubscription] = field(default=None)
    
