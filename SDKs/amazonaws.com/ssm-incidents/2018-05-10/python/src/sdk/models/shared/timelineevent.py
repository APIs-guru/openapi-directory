from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimelineEvent:
    r"""TimelineEvent
    A significant event that happened during the incident. 
    """
    
    event_data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventData') }})
    event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    event_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    event_updated_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventUpdatedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    incident_record_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordArn') }})
    
