from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody:
    runners: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    

@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequest:
    path_params: ActionsSetSelfHostedRunnersInGroupForOrgPathParams = field()
    request: Optional[ActionsSetSelfHostedRunnersInGroupForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    
