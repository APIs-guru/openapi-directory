from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest:
    path_params: EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
