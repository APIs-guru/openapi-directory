from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest:
    path_params: EnterpriseAdminListProvisionedIdentitiesEnterprisePathParams = field()
    query_params: EnterpriseAdminListProvisionedIdentitiesEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    scim_user_list_enterprise: Optional[shared.ScimUserListEnterprise] = field(default=None)
    
