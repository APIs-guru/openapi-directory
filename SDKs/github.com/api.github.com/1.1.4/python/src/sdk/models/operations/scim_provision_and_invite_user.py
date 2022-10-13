from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ScimProvisionAndInviteUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ScimProvisionAndInviteUserRequestBodyEmails:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimProvisionAndInviteUserRequestBodyName:
    family_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatted' }})
    given_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class ScimProvisionAndInviteUserRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    emails: List[ScimProvisionAndInviteUserRequestBodyEmails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    name: ScimProvisionAndInviteUserRequestBodyName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schemas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass
class ScimProvisionAndInviteUserRequest:
    path_params: ScimProvisionAndInviteUserPathParams = field(default=None)
    request: Optional[ScimProvisionAndInviteUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScimProvisionAndInviteUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
