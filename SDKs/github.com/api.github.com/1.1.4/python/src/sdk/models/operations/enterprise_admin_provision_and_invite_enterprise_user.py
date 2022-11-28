from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails:
    primary: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName:
    family_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody:
    emails: List[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    groups: Optional[List[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest:
    path_params: EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams = field()
    request: Optional[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
