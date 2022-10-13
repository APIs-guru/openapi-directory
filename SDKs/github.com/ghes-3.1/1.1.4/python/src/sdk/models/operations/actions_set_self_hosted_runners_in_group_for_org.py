from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequestBody:
    runners: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runners' }})
    

@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgRequest:
    path_params: ActionsSetSelfHostedRunnersInGroupForOrgPathParams = field(default=None)
    request: Optional[ActionsSetSelfHostedRunnersInGroupForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsSetSelfHostedRunnersInGroupForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
