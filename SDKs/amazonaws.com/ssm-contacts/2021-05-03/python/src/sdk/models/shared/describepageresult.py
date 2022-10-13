from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePageResult:
    contact_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactArn' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    engagement_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngagementArn' }})
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncidentId' }})
    page_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageArn' }})
    public_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicContent' }})
    public_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicSubject' }})
    read_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sender: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sender' }})
    sent_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
