from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody:
    selected_organization_ids: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organization_ids') }})
    

@dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest:
    path_params: EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams = field()
    request: Optional[EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
