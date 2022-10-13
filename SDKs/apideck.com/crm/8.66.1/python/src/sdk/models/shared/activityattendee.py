from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ActivityAttendeeStatusEnum(str, Enum):
    ACCEPTED = "accepted"
    TENTATIVE = "tentative"
    DECLINED = "declined"


@dataclass_json
@dataclass
class ActivityAttendee:
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_organizer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_organizer' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefix' }})
    status: Optional[ActivityAttendeeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
