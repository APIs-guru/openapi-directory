from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class ActivityMarkNotificationsAsReadRequestBody:
    last_read_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    

@dataclass_json
@dataclass
class ActivityMarkNotificationsAsRead202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ActivityMarkNotificationsAsReadRequest:
    request: Optional[ActivityMarkNotificationsAsReadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivityMarkNotificationsAsReadResponse:
    content_type: str = field()
    status_code: int = field()
    activity_mark_notifications_as_read_202_application_json_object: Optional[ActivityMarkNotificationsAsRead202ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
