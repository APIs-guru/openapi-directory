from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimingsModelGet:
    done_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    feedback_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    processing_period: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_period' }})
    receive_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receive_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
