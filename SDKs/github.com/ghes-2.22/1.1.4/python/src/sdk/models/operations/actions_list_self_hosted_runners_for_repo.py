from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListSelfHostedRunnersForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelfHostedRunnersForRepoQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListSelfHostedRunnersForRepoRequest:
    path_params: ActionsListSelfHostedRunnersForRepoPathParams = field(default=None)
    query_params: ActionsListSelfHostedRunnersForRepoQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListSelfHostedRunnersForRepo200ApplicationJSON:
    runners: List[shared.RunnerNoLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runners' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListSelfHostedRunnersForRepoResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_self_hosted_runners_for_repo_200_application_json_object: Optional[ActionsListSelfHostedRunnersForRepo200ApplicationJSON] = field(default=None)
    
