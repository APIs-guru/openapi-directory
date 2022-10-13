from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListSelfHostedRunnersInGroupForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListSelfHostedRunnersInGroupForOrgQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListSelfHostedRunnersInGroupForOrgRequest:
    path_params: ActionsListSelfHostedRunnersInGroupForOrgPathParams = field(default=None)
    query_params: ActionsListSelfHostedRunnersInGroupForOrgQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON:
    runners: List[shared.RunnerNoLabels] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runners' }})
    total_count: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListSelfHostedRunnersInGroupForOrgResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_self_hosted_runners_in_group_for_org_200_application_json_object: Optional[ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON] = field(default=None)
    
