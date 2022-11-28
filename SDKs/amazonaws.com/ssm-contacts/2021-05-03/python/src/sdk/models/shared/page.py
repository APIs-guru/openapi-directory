from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Page:
    r"""Page
    Incident Manager engaging a contact's contact channel.
    """
    
    contact_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactArn') }})
    engagement_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EngagementArn') }})
    page_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PageArn') }})
    sender: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sender') }})
    delivery_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    incident_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncidentId') }})
    read_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReadTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sent_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
