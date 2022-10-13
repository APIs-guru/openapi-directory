from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Traffic:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    uniques: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniques' }})
    
