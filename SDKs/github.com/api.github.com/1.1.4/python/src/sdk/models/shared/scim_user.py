from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScimUserEmails:
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    

@dataclass_json
@dataclass
class ScimUserMeta:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

@dataclass_json
@dataclass
class ScimUserName:
    family_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    
class ScimUserOperationsOpEnum(str, Enum):
    ADD = "add"
    REMOVE = "remove"
    REPLACE = "replace"


@dataclass_json
@dataclass
class ScimUserOperations:
    op: ScimUserOperationsOpEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('op') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimUser:
    r"""ScimUser
    SCIM /Users provisioning endpoints
    """
    
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    emails: List[ScimUserEmails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    external_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    meta: ScimUserMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    name: ScimUserName = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    user_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    groups: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    operations: Optional[List[ScimUserOperations]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    organization_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    
