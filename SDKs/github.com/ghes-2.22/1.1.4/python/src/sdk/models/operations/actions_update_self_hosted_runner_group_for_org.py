from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    
class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"
    PRIVATE = "private"


@dataclass_json
@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    visibility: Optional[ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgRequest:
    path_params: ActionsUpdateSelfHostedRunnerGroupForOrgPathParams = field()
    request: Optional[ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActionsUpdateSelfHostedRunnerGroupForOrgResponse:
    content_type: str = field()
    status_code: int = field()
    runner_groups_org: Optional[shared.RunnerGroupsOrg] = field(default=None)
    
