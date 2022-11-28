from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetRelationalDatabaseLogEventsRequest:
    log_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamName') }})
    relational_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    start_from_head: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startFromHead') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
