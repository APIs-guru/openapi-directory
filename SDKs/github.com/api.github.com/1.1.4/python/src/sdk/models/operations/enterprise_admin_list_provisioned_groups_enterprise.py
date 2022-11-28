from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminListProvisionedGroupsEnterprisePathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    excluded_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'excludedAttributes', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    start_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminListProvisionedGroupsEnterpriseRequest:
    path_params: EnterpriseAdminListProvisionedGroupsEnterprisePathParams = field()
    query_params: EnterpriseAdminListProvisionedGroupsEnterpriseQueryParams = field()
    

@dataclass
class EnterpriseAdminListProvisionedGroupsEnterpriseResponse:
    content_type: str = field()
    status_code: int = field()
    scim_group_list_enterprise: Optional[shared.ScimGroupListEnterprise] = field(default=None)
    
