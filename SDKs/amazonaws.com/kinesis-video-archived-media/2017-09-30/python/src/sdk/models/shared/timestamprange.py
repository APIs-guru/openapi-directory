from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimestampRange:
    end_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
