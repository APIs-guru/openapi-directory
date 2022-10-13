from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Event:
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    event_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventValue' }})
    impression: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impression' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    properties: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    recommendation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendationId' }})
    sent_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
