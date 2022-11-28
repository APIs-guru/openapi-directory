from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemScheduleList:
    channel_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    end_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedules: List[dict[str, Any]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedules') }})
    start_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
