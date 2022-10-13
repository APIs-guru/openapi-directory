from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams = field(default=None)
    query_params: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON:
    repositories: List[shared.Repository] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_list_repo_access_to_self_hosted_runner_group_in_org_200_application_json_object: Optional[ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON] = field(default=None)
    
