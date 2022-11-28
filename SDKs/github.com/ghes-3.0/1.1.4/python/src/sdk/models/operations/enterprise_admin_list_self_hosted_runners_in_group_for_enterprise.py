from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    runner_group_id: int = field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON:
    runners: List[shared.Runner] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    total_count: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams = field()
    query_params: EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    enterprise_admin_list_self_hosted_runners_in_group_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON] = field(default=None)
    
