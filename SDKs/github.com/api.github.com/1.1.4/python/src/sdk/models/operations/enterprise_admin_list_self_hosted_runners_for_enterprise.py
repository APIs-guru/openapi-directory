from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest:
    path_params: EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams = field(default=None)
    query_params: EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON:
    runners: Optional[List[shared.Runner]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runners' }})
    total_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_list_self_hosted_runners_for_enterprise_200_application_json_object: Optional[EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON] = field(default=None)
    
