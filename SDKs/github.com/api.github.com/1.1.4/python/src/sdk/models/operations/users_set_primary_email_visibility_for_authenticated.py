from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclass_json
@dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    visibility: UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    

@dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedRequest:
    request: Optional[UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersSetPrimaryEmailVisibilityForAuthenticatedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    emails: Optional[List[shared.Email]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
