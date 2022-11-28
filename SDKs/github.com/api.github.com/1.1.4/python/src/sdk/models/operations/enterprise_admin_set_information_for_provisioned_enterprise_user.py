from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams:
    enterprise: str = field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails:
    primary: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName:
    family_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody:
    emails: List[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    groups: Optional[List[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest:
    path_params: EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams = field()
    request: Optional[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_enterprise_user: Optional[shared.ScimEnterpriseUser] = field(default=None)
    
