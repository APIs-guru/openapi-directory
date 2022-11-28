from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetNotificationsJSON200ApplicationJSONNotificationsData:
    badge_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badge_id') }})
    badge_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badge_name') }})
    badge_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badge_slug') }})
    badge_title: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('badge_title') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

@dataclass_json
@dataclass
class GetNotificationsJSON200ApplicationJSONNotifications:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    data: Optional[GetNotificationsJSON200ApplicationJSONNotificationsData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    notification_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_type') }})
    post_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_number') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    topic_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic_id') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    

@dataclass_json
@dataclass
class GetNotificationsJSON200ApplicationJSON:
    load_more_notifications: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_more_notifications') }})
    notifications: Optional[List[GetNotificationsJSON200ApplicationJSONNotifications]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    seen_notification_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seen_notification_id') }})
    total_rows_notifications: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_rows_notifications') }})
    

@dataclass
class GetNotificationsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_notifications_json_200_application_json_object: Optional[GetNotificationsJSON200ApplicationJSON] = field(default=None)
    
