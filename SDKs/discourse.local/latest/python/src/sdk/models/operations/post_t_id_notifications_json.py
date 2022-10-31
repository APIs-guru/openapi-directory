from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostTIDNotificationsJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTIDNotificationsJSONHeaders:
    api_key: str = field(default=None, metadata={'header': { 'field_name': 'Api-Key', 'style': 'simple', 'explode': False }})
    api_username: str = field(default=None, metadata={'header': { 'field_name': 'Api-Username', 'style': 'simple', 'explode': False }})
    
class PostTIDNotificationsJSONRequestBodyNotificationLevelEnum(str, Enum):
    ZERO = "0"
    ONE = "1"
    TWO = "2"
    THREE = "3"


@dataclass_json
@dataclass
class PostTIDNotificationsJSONRequestBody:
    notification_level: PostTIDNotificationsJSONRequestBodyNotificationLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_level' }})
    

@dataclass
class PostTIDNotificationsJSONRequest:
    path_params: PostTIDNotificationsJSONPathParams = field(default=None)
    headers: PostTIDNotificationsJSONHeaders = field(default=None)
    request: Optional[PostTIDNotificationsJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostTIDNotificationsJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class PostTIDNotificationsJSONResponse:
    content_type: str = field(default=None)
    post_t_id_notifications_json_200_application_json_object: Optional[PostTIDNotificationsJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
