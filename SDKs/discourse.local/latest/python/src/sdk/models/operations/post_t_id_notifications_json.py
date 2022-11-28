from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostTIDNotificationsJSONPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTIDNotificationsJSONHeaders:
    api_key: str = field(metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    
class PostTIDNotificationsJSONRequestBodyNotificationLevelEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"


@dataclass_json
@dataclass
class PostTIDNotificationsJSONRequestBody:
    notification_level: PostTIDNotificationsJSONRequestBodyNotificationLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_level') }})
    

@dataclass_json
@dataclass
class PostTIDNotificationsJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class PostTIDNotificationsJSONRequest:
    headers: PostTIDNotificationsJSONHeaders = field()
    path_params: PostTIDNotificationsJSONPathParams = field()
    request: Optional[PostTIDNotificationsJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTIDNotificationsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    post_t_id_notifications_json_200_application_json_object: Optional[PostTIDNotificationsJSON200ApplicationJSON] = field(default=None)
    
