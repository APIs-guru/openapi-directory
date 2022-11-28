from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationSet:
    r"""NotificationSet
    A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
    """
    
    notification: Optional[List[Notification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    notification_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationSetId') }})
    
