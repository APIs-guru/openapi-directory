from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers:
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody:
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    members: Optional[List[EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest:
    path_params: EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams = field()
    request: Optional[EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
