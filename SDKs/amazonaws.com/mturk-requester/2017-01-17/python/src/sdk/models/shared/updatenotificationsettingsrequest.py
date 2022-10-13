from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationspecification


@dataclass_json
@dataclass
class UpdateNotificationSettingsRequest:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    hit_type_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITTypeId' }})
    notification: Optional[notificationspecification.NotificationSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notification' }})
    
