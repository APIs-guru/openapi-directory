from dataclasses import dataclass, field



@dataclass
class ActivityDeleteRepoSubscriptionPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityDeleteRepoSubscriptionRequest:
    path_params: ActivityDeleteRepoSubscriptionPathParams = field()
    

@dataclass
class ActivityDeleteRepoSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    
