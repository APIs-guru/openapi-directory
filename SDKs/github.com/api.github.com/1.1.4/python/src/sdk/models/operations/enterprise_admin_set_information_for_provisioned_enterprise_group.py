from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams:
    enterprise: str = field(default=None, metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers:
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    members: Optional[List[EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest:
    path_params: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams = field(default=None)
    request: Optional[EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
