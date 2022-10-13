from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DashTimestampRange:
    end_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
