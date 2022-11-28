from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsSetMembershipForUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    
class OrgsSetMembershipForUserRequestBodyRoleEnum(str, Enum):
    ADMIN = "admin"
    MEMBER = "member"


@dataclass_json
@dataclass
class OrgsSetMembershipForUserRequestBody:
    role: Optional[OrgsSetMembershipForUserRequestBodyRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass
class OrgsSetMembershipForUserRequest:
    path_params: OrgsSetMembershipForUserPathParams = field()
    request: Optional[OrgsSetMembershipForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsSetMembershipForUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_membership: Optional[shared.OrgMembership] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
