from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeEngagementResult:
    contact_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactArn' }})
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Content' }})
    engagement_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EngagementArn' }})
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncidentId' }})
    public_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicContent' }})
    public_subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicSubject' }})
    sender: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sender' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stop_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StopTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subject: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Subject' }})
    
