from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Breadcrumb:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
