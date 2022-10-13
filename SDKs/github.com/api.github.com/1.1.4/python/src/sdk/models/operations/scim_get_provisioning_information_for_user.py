from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ScimGetProvisioningInformationForUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ScimGetProvisioningInformationForUserRequest:
    path_params: ScimGetProvisioningInformationForUserPathParams = field(default=None)
    

@dataclass
class ScimGetProvisioningInformationForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
