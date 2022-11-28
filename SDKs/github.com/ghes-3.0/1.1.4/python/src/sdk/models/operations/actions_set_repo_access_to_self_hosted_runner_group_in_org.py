from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody:
    selected_repository_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_repository_ids') }})
    

@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    path_params: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams = field()
    request: Optional[ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
