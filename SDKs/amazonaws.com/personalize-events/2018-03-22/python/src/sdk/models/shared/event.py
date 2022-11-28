from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Event:
    r"""Event
    Represents user interaction event information sent using the <code>PutEvents</code> API.
    """
    
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    sent_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    event_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventValue') }})
    impression: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impression') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendationId') }})
    
