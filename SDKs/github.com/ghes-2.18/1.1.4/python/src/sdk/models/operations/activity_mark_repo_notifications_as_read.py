from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ActivityMarkRepoNotificationsAsReadPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ActivityMarkRepoNotificationsAsReadRequestBody:
    last_read_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_read_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ActivityMarkRepoNotificationsAsRead202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class ActivityMarkRepoNotificationsAsReadRequest:
    path_params: ActivityMarkRepoNotificationsAsReadPathParams = field()
    request: Optional[ActivityMarkRepoNotificationsAsReadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ActivityMarkRepoNotificationsAsReadResponse:
    content_type: str = field()
    status_code: int = field()
    activity_mark_repo_notifications_as_read_202_application_json_object: Optional[ActivityMarkRepoNotificationsAsRead202ApplicationJSON] = field(default=None)
    
