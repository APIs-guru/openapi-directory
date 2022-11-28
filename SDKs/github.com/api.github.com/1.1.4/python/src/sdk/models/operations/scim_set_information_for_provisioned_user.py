from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ScimSetInformationForProvisionedUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ScimSetInformationForProvisionedUserRequestBodyEmails:
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ScimSetInformationForProvisionedUserRequestBodyName:
    family_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    

@dataclass_json
@dataclass
class ScimSetInformationForProvisionedUserRequestBody:
    emails: List[ScimSetInformationForProvisionedUserRequestBodyEmails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: ScimSetInformationForProvisionedUserRequestBodyName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    schemas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclass
class ScimSetInformationForProvisionedUserRequest:
    path_params: ScimSetInformationForProvisionedUserPathParams = field()
    request: Optional[ScimSetInformationForProvisionedUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScimSetInformationForProvisionedUserResponse:
    content_type: str = field()
    status_code: int = field()
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
