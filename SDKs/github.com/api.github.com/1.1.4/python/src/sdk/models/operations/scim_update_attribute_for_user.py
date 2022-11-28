from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ScimUpdateAttributeForUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    
class ScimUpdateAttributeForUserRequestBodyOperationsOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"


@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBodyOperationsValue1:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    

@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBodyOperationsValue2:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBodyOperations:
    op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBody:
    operations: List[ScimUpdateAttributeForUserRequestBodyOperations] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operations') }})
    schemas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclass
class ScimUpdateAttributeForUserRequest:
    path_params: ScimUpdateAttributeForUserPathParams = field()
    request: Optional[ScimUpdateAttributeForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScimUpdateAttributeForUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
