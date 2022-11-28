from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers:
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody:
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    members: Optional[List[EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest:
    path_params: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams = field()
    request: Optional[EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_group: Optional[shared.ScimEnterpriseGroup] = field(default=None)
    
