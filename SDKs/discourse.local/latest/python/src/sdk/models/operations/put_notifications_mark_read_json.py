from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutNotificationsMarkReadJSONRequestBody:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass
class PutNotificationsMarkReadJSONRequest:
    request: Optional[PutNotificationsMarkReadJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutNotificationsMarkReadJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class PutNotificationsMarkReadJSONResponse:
    content_type: str = field(default=None)
    put_notifications_mark_read_json_200_application_json_object: Optional[PutNotificationsMarkReadJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
