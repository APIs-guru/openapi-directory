from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PermissionSet:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    permission_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    relay_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelayState' }})
    session_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionDuration' }})
    
