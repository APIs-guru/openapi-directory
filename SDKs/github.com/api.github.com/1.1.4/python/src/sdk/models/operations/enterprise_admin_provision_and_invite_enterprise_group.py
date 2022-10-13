from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers:
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    members: Optional[List[EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest:
    path_params: EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams = field(default=None)
    request: Optional[EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
