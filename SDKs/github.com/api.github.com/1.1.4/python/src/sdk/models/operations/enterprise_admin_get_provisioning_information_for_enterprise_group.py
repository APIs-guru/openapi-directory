from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams:
    excluded_attributes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'excludedAttributes', 'style': 'form', 'explode': True }})
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest:
    path_params: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupPathParams = field()
    query_params: EnterpriseAdminGetProvisioningInformationForEnterpriseGroupQueryParams = field()
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
