from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UpdateTrackerResponse:
    tracker_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackerArn') }})
    tracker_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrackerName') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
