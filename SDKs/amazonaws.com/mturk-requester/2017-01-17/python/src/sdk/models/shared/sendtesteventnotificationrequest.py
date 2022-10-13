from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import notificationspecification
from . import eventtype_enum


@dataclass_json
@dataclass
class SendTestEventNotificationRequest:
    notification: notificationspecification.NotificationSpecification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    test_event_type: eventtype_enum.EventTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TestEventType' }})
    
