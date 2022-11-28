from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ScimGetProvisioningInformationForUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScimGetProvisioningInformationForUserRequest:
    path_params: ScimGetProvisioningInformationForUserPathParams = field()
    

@dataclass
class ScimGetProvisioningInformationForUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
