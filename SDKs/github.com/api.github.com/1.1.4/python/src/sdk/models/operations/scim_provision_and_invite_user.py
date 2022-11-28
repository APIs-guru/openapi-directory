from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ScimProvisionAndInviteUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ScimProvisionAndInviteUserRequestBodyEmails:
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ScimProvisionAndInviteUserRequestBodyName:
    family_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    

@dataclass_json
@dataclass
class ScimProvisionAndInviteUserRequestBody:
    emails: List[ScimProvisionAndInviteUserRequestBodyEmails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: ScimProvisionAndInviteUserRequestBodyName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    schemas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclass
class ScimProvisionAndInviteUserRequest:
    path_params: ScimProvisionAndInviteUserPathParams = field()
    request: Optional[ScimProvisionAndInviteUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScimProvisionAndInviteUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
