from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    runners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runners' }})
    selected_repository_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selected_repository_ids' }})
    visibility: Optional[ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    

@dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsCreateSelfHostedRunnerGroupForOrgPathParams = field(default=None)
    request: Optional[ActionsCreateSelfHostedRunnerGroupForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsCreateSelfHostedRunnerGroupForOrgResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_groups_org: Optional[shared.RunnerGroupsOrg] = field(default=None)
    
