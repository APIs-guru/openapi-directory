from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationcontext


@dataclass_json
@dataclass
class NotifyAppValidationOutputRequest:
    app_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    notification_context: Optional[notificationcontext.NotificationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationContext' }})
    
