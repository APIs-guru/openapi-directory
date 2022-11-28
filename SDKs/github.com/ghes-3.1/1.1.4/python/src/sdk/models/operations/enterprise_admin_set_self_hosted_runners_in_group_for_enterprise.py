from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody:
    runners: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    

@dataclass
class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest:
    path_params: EnterpriseAdminSetSelfHostedRunnersInGroupForEnterprisePathParams = field()
    request: Optional[EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    
