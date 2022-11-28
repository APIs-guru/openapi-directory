from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON:
    runners: Optional[List[shared.Runner]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runners') }})
    total_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams = field()
    query_params: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    enterprise_admin_list_self_hosted_runners_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON] = field(default=None)
    
