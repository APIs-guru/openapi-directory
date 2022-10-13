from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    
class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    visibility: Optional[ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    

@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsUpdateSelfHostedRunnerGroupForOrgPathParams = field(default=None)
    request: Optional[ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_groups_org: Optional[shared.RunnerGroupsOrg] = field(default=None)
    
