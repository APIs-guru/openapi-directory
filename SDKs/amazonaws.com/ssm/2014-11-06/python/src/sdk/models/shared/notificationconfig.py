from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import notificationevent_enum
from . import notificationtype_enum


@dataclass_json
@dataclass
class NotificationConfig:
    notification_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationArn' }})
    notification_events: Optional[List[notificationevent_enum.NotificationEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationEvents' }})
    notification_type: Optional[notificationtype_enum.NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotificationType' }})
    
