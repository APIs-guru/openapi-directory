from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest:
    path_params: EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams = field(default=None)
    query_params: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams = field(default=None)
    

@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_user_list_enterprise: Optional[shared.ScimUserListEnterprise] = field(default=None)
    
