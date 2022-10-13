from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemScheduleList:
    channel_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    end_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedules: List[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedules' }})
    start_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
