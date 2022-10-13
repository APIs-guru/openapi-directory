from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimelineEvent:
    event_data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventData' }})
    event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    event_updated_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventUpdatedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    incident_record_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'incidentRecordArn' }})
    
