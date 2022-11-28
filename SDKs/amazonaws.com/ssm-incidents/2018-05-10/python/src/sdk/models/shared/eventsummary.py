from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventSummary:
    r"""EventSummary
    Details about a timeline event during an incident.
    """
    
    event_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    event_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    event_updated_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventUpdatedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    incident_record_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordArn') }})
    
