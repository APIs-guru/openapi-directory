from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScimUserEmails:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimUserMeta:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass_json
@dataclass
class ScimUserName:
    family_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formatted' }})
    given_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    
class ScimUserOperationsOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"


@dataclass_json
@dataclass
class ScimUserOperations:
    op: ScimUserOperationsOpEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimUser:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    emails: List[ScimUserEmails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    external_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    meta: ScimUserMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    name: ScimUserName = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operations: Optional[List[ScimUserOperations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    organization_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_id' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    user_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
