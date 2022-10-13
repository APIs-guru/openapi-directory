from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import activitytype
from . import registrationstatus_enum


@dataclass_json
@dataclass
class ActivityTypeInfo:
    activity_type: activitytype.ActivityType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deprecation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    status: registrationstatus_enum.RegistrationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
