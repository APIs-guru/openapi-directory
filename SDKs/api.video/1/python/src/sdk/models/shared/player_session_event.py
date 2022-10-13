from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayerSessionEvent:
    at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'at' }})
    emitted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emittedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    from_: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
