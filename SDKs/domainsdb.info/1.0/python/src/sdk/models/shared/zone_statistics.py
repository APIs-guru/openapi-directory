from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ZoneStatistics:
    date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dec: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dec' }})
    inc: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inc' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
