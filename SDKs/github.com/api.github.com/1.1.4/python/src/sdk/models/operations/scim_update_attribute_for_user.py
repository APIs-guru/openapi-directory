from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ScimUpdateAttributeForUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    scim_user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    
class ScimUpdateAttributeForUserRequestBodyOperationsOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"


@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBodyOperationsValue1:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBodyOperationsValue2:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBodyOperations:
    op: ScimUpdateAttributeForUserRequestBodyOperationsOpEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimUpdateAttributeForUserRequestBody:
    operations: List[ScimUpdateAttributeForUserRequestBodyOperations] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operations' }})
    schemas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    

@dataclass
class ScimUpdateAttributeForUserRequest:
    path_params: ScimUpdateAttributeForUserPathParams = field(default=None)
    request: Optional[ScimUpdateAttributeForUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScimUpdateAttributeForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    scim_user: Optional[shared.ScimUser] = field(default=None)
    
