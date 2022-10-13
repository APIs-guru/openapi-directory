from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetSelfHostedRunnerGroupForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsGetSelfHostedRunnerGroupForOrgPathParams = field(default=None)
    

@dataclass
class ActionsGetSelfHostedRunnerGroupForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_groups_org: Optional[shared.RunnerGroupsOrg] = field(default=None)
    
