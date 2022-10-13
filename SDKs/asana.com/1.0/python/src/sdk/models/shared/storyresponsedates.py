from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StoryResponseDates:
    due_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    due_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
