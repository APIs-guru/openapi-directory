from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrgsUpdateMembershipForAuthenticatedUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum(str, Enum):
    ACTIVE = "active"


@dataclass_json
@dataclass
class OrgsUpdateMembershipForAuthenticatedUserRequestBody:
    state: OrgsUpdateMembershipForAuthenticatedUserRequestBodyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass
class OrgsUpdateMembershipForAuthenticatedUserRequest:
    path_params: OrgsUpdateMembershipForAuthenticatedUserPathParams = field()
    request: Optional[OrgsUpdateMembershipForAuthenticatedUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrgsUpdateMembershipForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    org_membership: Optional[shared.OrgMembership] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
