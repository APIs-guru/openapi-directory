from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExecutionTimeFilter:
    latest_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    oldest_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldestDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
