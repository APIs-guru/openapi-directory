from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutNotificationsMarkReadJSONRequestBody:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class PutNotificationsMarkReadJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class PutNotificationsMarkReadJSONRequest:
    request: Optional[PutNotificationsMarkReadJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNotificationsMarkReadJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_notifications_mark_read_json_200_application_json_object: Optional[PutNotificationsMarkReadJSON200ApplicationJSON] = field(default=None)
    
