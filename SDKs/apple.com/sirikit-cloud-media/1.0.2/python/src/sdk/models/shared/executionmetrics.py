from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecutionMetrics:
    completed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
