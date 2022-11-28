from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"


@dataclass_json
@dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    runners: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    selected_organization_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organization_ids') }})
    visibility: Optional[EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    

@dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminCreateSelfHostedRunnerGroupForEnterprisePathParams = field()
    request: Optional[EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    runner_groups_enterprise: Optional[shared.RunnerGroupsEnterprise] = field(default=None)
    
