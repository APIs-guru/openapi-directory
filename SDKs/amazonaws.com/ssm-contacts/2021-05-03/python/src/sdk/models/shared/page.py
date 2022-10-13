from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Page:
    contact_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactArn' }})
    delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engagement_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngagementArn' }})
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncidentId' }})
    page_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageArn' }})
    read_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sender: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sender' }})
    sent_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
