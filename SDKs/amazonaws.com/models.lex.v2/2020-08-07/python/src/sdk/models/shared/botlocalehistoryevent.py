from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BotLocaleHistoryEvent:
    event: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    event_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
