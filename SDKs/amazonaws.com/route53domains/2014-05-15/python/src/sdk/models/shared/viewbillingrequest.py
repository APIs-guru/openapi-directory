from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ViewBillingRequest:
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'End', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    max_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxItems' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
