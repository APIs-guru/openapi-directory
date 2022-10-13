from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListSelfHostedRunnerGroupsForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelfHostedRunnerGroupsForOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListSelfHostedRunnerGroupsForOrgRequest:
    path_params: ActionsListSelfHostedRunnerGroupsForOrgPathParams = field(default=None)
    query_params: ActionsListSelfHostedRunnerGroupsForOrgQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON:
    runner_groups: List[shared.RunnerGroupsOrg] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runner_groups' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListSelfHostedRunnerGroupsForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_list_self_hosted_runner_groups_for_org_200_application_json_object: Optional[ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON] = field(default=None)
    
