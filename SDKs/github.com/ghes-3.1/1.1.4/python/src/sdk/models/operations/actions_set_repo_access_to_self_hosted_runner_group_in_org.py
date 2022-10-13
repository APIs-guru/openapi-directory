from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody:
    selected_repository_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repository_ids' }})
    

@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams = field(default=None)
    request: Optional[ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
