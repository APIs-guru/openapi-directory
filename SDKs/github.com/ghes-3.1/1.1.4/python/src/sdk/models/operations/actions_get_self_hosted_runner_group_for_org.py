from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetSelfHostedRunnerGroupForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsGetSelfHostedRunnerGroupForOrgPathParams = field()
    

@dataclass
class ActionsGetSelfHostedRunnerGroupForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    runner_groups_org: Optional[shared.RunnerGroupsOrg] = field(default=None)
    
