from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum(str, Enum):
    SELECTED = "selected"
    ALL = "all"


@dataclass_json
@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    visibility: Optional[EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBodyVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    

@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest:
    path_params: EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterprisePathParams = field(default=None)
    request: Optional[EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    runner_groups_enterprise: Optional[shared.RunnerGroupsEnterprise] = field(default=None)
    
