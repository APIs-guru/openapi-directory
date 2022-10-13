from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class NotificationEntitySendIntervalEnum(str, Enum):
    FIVE_MINUTES = "five_minutes"
    FIFTEEN_MINUTES = "fifteen_minutes"
    HOURLY = "hourly"
    DAILY = "daily"

class NotificationEntityUnsubscribedReasonEnum(str, Enum):
    NONE = "none"
    UNSUBSCRIBE_LINK_CLICKED = "unsubscribe_link_clicked"
    MAIL_BOUNCED = "mail_bounced"
    MAIL_MARKED_AS_SPAM = "mail_marked_as_spam"


@dataclass_json
@dataclass
class NotificationEntity:
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_id' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    notify_on_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notify_on_copy' }})
    notify_user_actions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notify_user_actions' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    recursive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recursive' }})
    send_interval: Optional[NotificationEntitySendIntervalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'send_interval' }})
    suppressed_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suppressed_email' }})
    unsubscribed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsubscribed' }})
    unsubscribed_reason: Optional[NotificationEntityUnsubscribedReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsubscribed_reason' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
