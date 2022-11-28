from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationConfig:
    r"""NotificationConfig
    Configurations for sending notifications.
    """
    
    notification_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationArn') }})
    notification_events: Optional[List[NotificationEventEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationEvents') }})
    notification_type: Optional[NotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotificationType') }})
    
