from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest:
    path_params: EnterpriseAdminGetProvisioningInformationForEnterpriseUserPathParams = field()
    

@dataclass
class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
